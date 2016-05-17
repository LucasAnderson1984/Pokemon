import { models } from '~/src/api/models';

exports.index = function(req, res) {
  models.Pokedex
    .findAll({ order: ['id'] })
    .then(function(pokedexes) { res.json(pokedexes); })
    .catch(function(error) { next(error); });
};

exports.show = function(req, res, next) {
  models.Pokedex
    .findById( req.params.id)
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
    .then(function(pokedex) { res.redirect('/pokedexes'); })
    .catch(function(error) { next(error) });
};

exports.update = function(req, res) {
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
    .then(function(pokedex) { res.redirect('/pokedexes'); })
    .catch(function(error) { next(error) });
};

exports.destroy = function(req, res) {
  models.Pokedex
    .destroy({ where: { id: req.params.id } })
    .then(function(pokedex) { res.redirect('/pokedexes')
    .catch(function(error) { next(error) });
  });
};
