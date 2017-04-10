/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Poi = require('../api/poi/poi.model');


Poi.find({}).remove(function() {
  Poi.create({
    nome : 'Lanchonete',
    x : 27,
    y : 12
  },{
    nome : 'Posto',
    x : 31,
    y : 18
  },{
    nome : 'Joalheria',
    x : 15,
    y : 12
  },{
    nome : 'Floricultura',
    x : 19,
    y : 21
  },{
    nome : 'Pub',
    x : 12,
    y : 8
  },{
    nome : 'Supermercado',
    x : 23,
    y : 6
  },{
    nome : 'Churrascaria',
    x : 28,
    y : 2
  });
});