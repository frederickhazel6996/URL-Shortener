/* eslint-disable no-undef */
const request = require('supertest');
const testapp = require('../../../app');
const spawn = require('spawn-password');
const { mongoInstance } = require('../utils');
const { mongoConnection } = require('../../../app');
var identifier;
var identifier2 = 'H03934';
var url =
    'https://stackoverflow.com/questions/219569/best-database-field-type-for-a-url';

var api = '/api/url';
beforeAll(async done => {
    await mongoInstance(mongoConnection);
    done();
});

afterAll(async done => {
    await mongoInstance(mongoConnection);
    done();
});

test('Add URL to database', async () => {
    await request(testapp)
        .post(`${api}/add-url`)
        .send({
            url: url
        })
        .set('Accept', 'application/json')
        .expect(201)
        .then(response => {
            identifier = response.body.urlIdentifier;
        });
});
test('Get URL data from database', async () => {
    await request(testapp).get(`${api}/get-url/${identifier}`).expect(302);
});
test('URL not found', async () => {
    await request(testapp).get(`${api}/get-url/${identifier2}`).expect(404);
});

test('Wrong paramter type submitted', async () => {
    await request(testapp)
        .post(`${api}/add-url`)
        .send({})
        .set('Accept', 'application/json')
        .expect(422);
});
