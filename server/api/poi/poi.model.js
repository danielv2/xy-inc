'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PoiSchema = new Schema({
  nome: String,
  x: Number,
  y: Number
});

PoiSchema
  .pre('save', function (next) {

    if (this.x < 0 || this.y < 0) {
      next(new Error("Os campos de coordenadas devem ser positivos."));      
    }
    
    next();
  });

module.exports = mongoose.model('Poi', PoiSchema);