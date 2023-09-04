const request = require('supertest');
const mongoose = require('mongoose');
const { app, server } = require('../../app');

describe('Tracks API tests', () => {

    let response;

    const handleWorkingRoute = () => {

        expect(response.status).toBe(200);

        expect(response.headers['content-type']).toContain('json');

        expect(response.body).toBeInstanceOf(Object);

    };

    afterAll(() => {

        mongoose.disconnect();

        server.close();

    });

    describe('GET /api/v1/tracks', () => {

        beforeEach(async () => {

            response = await request(app).get('/api/v1/tracks');

        });

        test('The route is working', () => {

            handleWorkingRoute();

        });

        test('There is at least one track stored in the database', () => {

            expect(response.body.ok).toBeTruthy();

            expect(response.body.data.length).toBeGreaterThan(0);

        });

    });

    describe('GET /api/v1/track/:id', () => {

        beforeEach(async () => {

            response = await request(app).get('/api/v1/track/5ZE4NzQgNCeCWtcOMWMVc5');

        });

        test('The route is working', () => {

            handleWorkingRoute();

        });

        test('The track exists in the database', () => {

            expect(response.body.ok).toBeTruthy();

        });

        test('The track does not exist in the database', async () => {

            const newResponse = await request(app).get('/api/v1/track/this-ID-does-not-exist');

            expect(newResponse.status).toBe(404);

            expect(newResponse.body.ok).toBeFalsy();

        });

    });

    describe('GET /api/v1/tracks/counter', () => {

        beforeEach(async () => {

            response = await request(app).get('/api/v1/tracks/counter');

        });

        test('The route is working', () => {

            handleWorkingRoute();

        });

        test('The database is not empty', () => {

            expect(response.body.ok).toBeTruthy();

            expect(response.body.data).toBeGreaterThan(0);

        });

    });

});