'use strict';
var uuid = require('uuid-v4');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Types', [
      {
        uuid: uuid(),
        reference: 1,
        type: 'Normal',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 2,
        type: 'Fire',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 3,
        type: 'Water',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 4,
        type: 'Grass',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 5,
        type: 'Electric',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 6,
        type: 'Ice',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 7,
        type: 'Fighting',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 8,
        type: 'Poison',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 9,
        type: 'Ground',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 10,
        type: 'Flying',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 11,
        type: 'Psychic',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 12,
        type: 'Bug',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 13,
        type: 'Rock',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 14,
        type: 'Ghost',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 15,
        type: 'Dark',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 16,
        type: 'Dragon',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 17,
        type: 'Steel',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        reference: 18,
        type: 'Fairy',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) {}
};
