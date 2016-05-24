import { models } from '~/src/api/models';

exports.index = function(req, res, next) {
  var param = req.query.param == null ? '' : req.query.param;
  models.Type
    .findAll({ where: { type: { like: `%${param}%` }}, order: ['id'] })
    .then(function(types) { res.json(types); })
    .catch(function(error) { next(error); });
};

exports.show = function(req, res, next) {
  models.Type
    .findById( req.params.id)
    .then(function(type) { res.json(type); })
    .catch(function(error) { next(error); });
};

exports.create = function(req, res, next) {
  const TypeParams = {
    reference: req.body.reference,
    type: req.body.type,
    created_by: 'Lucas Anderson',
    created_at: Date(),
    updated_by: 'Lucas Anderson',
    updated_at: Date(),
    createdAt: Date(),
    updatedAt: Date()
  };

  models.Type
    .create(TypeParams)
    .then(function(type) { res.json({ success: true }); })
    .catch(function(error) { next(error) });
};

exports.update = function(req, res, next) {
  const TypeParams = {
    reference: req.body.reference,
    type: req.body.type,
    updated_by: 'Lucas Anderson',
    updated_at: Date(),
    updatedAt: Date()
  };

  models.Type
    .update(TypeParams, { where: { id: req.params.id } })
    .then(function(type) { res.json({ success: true }); })
    .catch(function(error) { next(error) });
};

exports.destroy = function(req, res, next) {
  models.Type
    .destroy({ where: { id: req.params.id } })
    .then(function(type) { res.json({ success: true }); })
    .catch(function(error) { next(error) });
};
