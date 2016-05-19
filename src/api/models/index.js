import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configs from '~/config/config.json';

const env = process.env.NODE_ENV || 'development';
const config = configs[env];
const models = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  Object.assign(config, {
    define: {
      underscored: true,
      //paranoid: true,
      timestamps: true
    }
  })
);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function(modelName) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export {
  sequelize,
  Sequelize,
  models
};
