import { models } from '~/src/api/models';

exports.index = function(req, res, next) {
  var param = req.query.param == null ? '' : req.query.param;
  models.Pokedex
    .findAll({
      attributes: ['id',
                   'uuid',
                   'national_id',
                   'name',
                   'type1_id',
                   'type2_id',
                   'status',
                   'created_by',
                   'created_at',
                   'updated_by',
                   'updated_at'],
       include: [
         { model: models.Type, as: 'type1', attributes: ['type']},
         { model: models.Type, as: 'type2', attributes: ['type']}
       ],
       where: {
         $or: [
           { national_id: parseInt(`${param}`) || 0 },
           { name: { like: `%${param}%` }},
           { status: `${param}`},
           { '$type1.type$': { like: `%${param}%` }},
           { '$type2.type$': { like: `%${param}%` }}
         ]
       },
       order: ['id'] })
    .then(function(pokedexes) { res.json(pokedexes); })
    .catch(function(error) { next(error); });
};

exports.show = function(req, res, next) {
  models.Pokedex
    .findById( req.params.id, {
      attributes: ['id',
                   'uuid',
                   'national_id',
                   'name',
                   'type1_id',
                   'type2_id',
                   'status',
                   'created_by',
                   'created_at',
                   'updated_by',
                   'updated_at'],
     include: [{ all: true }]
    })
    .then(function(pokedex) { res.json(pokedex); })
    .catch(function(error) { next(error); });
};

exports.create = function(req, res, next) {
  const PokedexParams = {
    national_id: req.body.national_id,
    name: req.body.name,
    type1_id: req.body.type1_id,
    type2_id: req.body.type2_id,
    status: req.body.status,
    created_by: 'Lucas Anderson',
    created_at: Date(),
    updated_by: 'Lucas Anderson',
    updated_at: Date(),
    createdAt: Date(),
    updatedAt: Date()
  };

  models.Pokedex
    .create(PokedexParams)
    .then(function(pokedex) { res.json({ success: true }); })
    .catch(function(error) { next(error) });
};

exports.update = function(req, res, next) {
  const PokedexParams = {
    national_id: req.body.national_id,
    name: req.body.name,
    type1_id: req.body.type1_id,
    type2_id: req.body.type2_id,
    status: req.body.status,
    updated_by: 'Lucas Anderson',
    updated_at: Date(),
    updatedAt: Date()
  };

  models.Pokedex
    .update(PokedexParams, { where: { id: req.params.id } })
    .then(function(pokedex) { res.json({ success: true }); })
    .catch(function(error) { next(error) });
};

exports.destroy = function(req, res, next) {
  models.Pokedex
    .destroy({ where: { id: req.params.id } })
    .then(function(pokedex) { res.json({ success: true }); })
    .catch(function(error) { next(error) });
};
