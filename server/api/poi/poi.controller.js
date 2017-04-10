'use strict';

var _ = require('lodash');
var Poi = require('./poi.model');
var P = require('../../components/map');

exports.index = function(req, res) {
  Poi.find(function (err, pois) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pois);
  });
};

exports.show = function(req, res) {
  Poi.findById(req.params.id, function (err, poi) {
    if(err) { return handleError(res, err); }
    if(!poi) { return res.status(404).send('Not Found'); }
    return res.status(200).json(poi);
  });
};

exports.create = function(req, res) {
  Poi.findOne({nome : req.body.nome}, function (err, valPOI) {
    if (err) return next(err);
    if (valPOI)
     return res.status(412).send('Já existe um POI cadastrado com este nome.');   

    Poi.create(req.body, function(err, POI) {
      if(err) { return res.status(401).send(err.message) }
      return res.status(201).json(POI);
    });
  });
};

exports.proximidade = function(req, res) {
    P.findProximidade(Number(req.body.x), Number(req.body.y), Number(req.body.metros))
    .then(function (POIs) {
      return res.json(POIs);
    }, function (err) {
      return res.status(401).send(err.message);  
    });
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Poi.findById(req.params.id, function (err, poi) {
    if (err) { return handleError(res, err); }
    if(!poi) { return res.status(404).send('Not Found'); }
    var updated = _.merge(poi, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(poi);
    });
  });
};

exports.destroy = function(req, res) {
  Poi.findById(req.params.id, function (err, poi) {
    if(err) { return handleError(res, err); }
    if(!poi) { return res.status(404).send('Not Found'); }
    poi.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}