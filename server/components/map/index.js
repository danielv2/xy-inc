'use strict';

var Poi = require('../../api/poi/poi.model');
var q = require('q');

function findProximidade(x, y, metros){
    var defer = q.defer();
    Poi.aggregate( [ { 
        $project: { 
            resultado: 
            { $subtract: [ 
                metros,
                { $add: [ 
                    { $abs: [ { $subtract: [ "$x", x ] } ] }, 
                    { $abs: [ { $subtract: [ "$y", y ] } ] } ] } 
                ]
            },
            _id : "$_id",
            nome : "$nome" 
        } },
        { $match : { resultado : { $gte : 0 }} },
        ] , function (err, usinas) {
        if (err) defer.reject(err);
        defer.resolve(usinas);
    });

    return defer.promise;
}

module.exports = {
  findProximidade: findProximidade
};
