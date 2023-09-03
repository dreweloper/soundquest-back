const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Tracks API tests', () => {

    afterAll(async () => {
        
        await mongoose.disconnect();
    });

    describe('GET /api/v1/tracks', () => {

        let response;

        beforeEach(async () => {

            response = await request(app).get('/api/v1/tracks');

        });

        test('The route is working', () => {

            expect(response.status).toBe(200);

            expect(response.headers['content-type']).toContain('json');

        });

    });

});