'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var POI = {
  _id : '58eb7eb46dbf7be0262839a5',
  nome : 'Ponto de Interesse Novo',
  x : 30,
  y : 25
}

function checkBody(res){
    res.body.should.have.property('_id');
    res.body.should.have.property('nome');
    res.body.should.have.property('x');
    res.body.should.have.property('y');
 
    res.body._id.should.be.equal(POI._id);
    res.body.nome.should.be.equal(POI.nome);
    res.body.x.should.be.equal(POI.x);
    res.body.y.should.be.equal(POI.y);
}

describe('GET /api/pois', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/pois')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/pois', function() {
  it('should respond with document _id', function(done) {
    request(app)
      .post('/api/pois')
      .send(POI)
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        checkBody(res);
        done();
      });
  });
});

describe('GET /api/pois/:id', function() {

  it('should respond with JSON object', function(done) {
    request(app)
      .get('/api/pois/58eb7eb46dbf7be0262839a5')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {        
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        checkBody(res);
        done();
      });
  });
});

describe('PUT /api/pois/:id', function() {

  POI.nome = "Ponto de Interesse ALTERADO";

  it('should respond with changed JSON object', function(done) {
    request(app)
      .put('/api/pois/58eb7eb46dbf7be0262839a5')
      .send(POI)
      .expect(200)      
      .end(function(err, res) {        
        if (err) return done(err);
        res.body.should.be.instanceof(Object);        
        checkBody(res);
        done();
      });
  });
});

describe('DELETE /api/pois/:id', function() {

  it('should respond 204 No Content', function(done) {
    request(app)
      .delete('/api/pois/58eb7eb46dbf7be0262839a5')
      .expect(204)      
      .end(function(err, res) {        
        if (err) return done(err);
        res.body.should.be.empty;
        done();
      });
  });
});