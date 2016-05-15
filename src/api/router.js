import cors from 'cors';
import types from './controllers/typesController.js';

export default (app) => {
  app.use(function(req, res, next) {
    next();
  });

  app.get('/', cors(), function(req, res) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
  });

  // Type Routes
  app.get('/types', types.index);
  app.get('/types/:id', types.show);
  app.post('/types', types.create);
  app.patch('/types/:id', types.update);
  app.delete('/types/:id', types.destroy);
};
