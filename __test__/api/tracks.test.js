const request = require('supertest');
const mongoose = require('mongoose');
const { app, server } = require('../../app');
const Track = require('../../models/trackModel');

describe('Tracks API tests', () => {

  let response, id

  const data = {
    host: {
      username: 'aleon88',
      profile_url: 'https://open.spotify.com/user/aleon88'
    },
    playlist: {
      playlist_id: '5ESWsdQLtz3xkEA7jC3Mcg',
      playlist_url: 'https://open.spotify.com/playlist/5ESWsdQLtz3xkEA7jC3Mcg'
    },
    track: {
      track_id: '5ZE4NzQgNCeCWtcOMWMVc5',
      name: 'In Fear and Faith',
      artist: 'Circa Survive',
      album: 'Juturna',
      artwork:
        'https://i.scdn.co/image/ab67616d0000b2733c7737aea2a393c863cf6bce',
      track_url: 'https://open.spotify.com/track/5ZE4NzQgNCeCWtcOMWMVc5'
    }
  };

  const unknownId = '64f1c1287346700f56b7b007';

  const handleWorkingRoute = status => {

    expect(response.status).toBe(status);

    expect(response.headers['content-type']).toContain('json');

    expect(response.body).toBeInstanceOf(Object);

  };

  const handleTrackDoesNotExist = documentId => {

    expect(response.status).toBe(404);

    expect(response.body.ok).toBeFalsy();

    expect(response.body.msg).toBe(`The track with ID ${documentId} does not exist in the database.`);

  };

  afterAll(() => {

    mongoose.disconnect();

    server.close();

  });

  describe('GET /api/v1/tracks', () => {

    beforeAll(async () => {

      const track = new Track(data);

      response = await track.save();

    });

    beforeEach(async () => {

      response = await request(app).get('/api/v1/tracks');

    });

    test('The route is working', () => {

      handleWorkingRoute(200);

    });

    test('There is at least one track stored in the database', () => {

      expect(response.body.ok).toBeTruthy();

      expect(response.body.data.length).toBeGreaterThan(0);

    });

    test('The database is empty', async () => {

      await Track.deleteMany();

      response = await request(app).get('/api/v1/tracks');

      expect(response.status).toBe(404);

      expect(response.body.ok).toBeFalsy();

      expect(response.body.msg).toBe('There are no tracks saved in the database.');

    });

  });

  describe('GET /api/v1/track/:id', () => {

    beforeAll(async () => {

      const track = new Track(data);

      response = await track.save();

      id = response.track.track_id;

    });

    beforeEach(async () => {

      response = await request(app).get(`/api/v1/track/${id}`);

    });

    afterAll(async () => {

      await Track.deleteMany();

    });

    test('The route is working', () => {

      handleWorkingRoute(200);

    });

    test('The track exists in the database', () => {

      expect(response.body.ok).toBeTruthy();

    });

    test('The track does not exist in the database', async () => {

      response = await request(app).get(`/api/v1/track/${unknownId}`);

      handleTrackDoesNotExist(unknownId);

    });

  });

  describe('GET /api/v1/tracks/counter', () => {

    beforeAll(async () => {

      const track = new Track(data);

      response = await track.save();

    });

    beforeEach(async () => {

      response = await request(app).get("/api/v1/tracks/counter");

    });

    afterAll(async () => {

      await Track.deleteMany();

    });

    test('The route is working', () => {

      handleWorkingRoute(200);

    });

    test('The database has one track document stored', () => {

      expect(response.body.ok).toBeTruthy();

      expect(response.body.data).toStrictEqual(1);

    });
    
  });

  describe('POST /api/v1/tracks', () => {

    afterAll(async () => {

      await Track.deleteMany();

    });

    test('The route is working', async () => {
      
      response = await request(app).post('/api/v1/tracks').send(data);

      handleWorkingRoute(201);

    });

  });

  describe('DELETE /api/v1/track/:id', () => {

    beforeAll(async () => {

      const track = new Track(data);

      response = await track.save();

      id = response._id;

    });

    test('The route is working', async () => {

      response = await request(app).delete(`/api/v1/track/${id}`);

      handleWorkingRoute(200);

    });

    test('The track does not exist in the database', async () => {

      response = await request(app).delete(`/api/v1/track/${unknownId}`);

      handleTrackDoesNotExist(unknownId);

    });

  });

});