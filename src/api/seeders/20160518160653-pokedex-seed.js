'use strict';
var uuid = require('uuid-v4');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pokedexes', [
      {
        uuid: uuid(),
        national_id: 1,
        name: 'Bulbasaur',
        type1_id: 4,
        type2_id: 8,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 2,
        name: 'Ivysaur',
        type1_id: 4,
        type2_id: 8,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 3,
        name: 'Venusaur',
        type1_id: 4,
        type2_id: 8,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 4,
        name: 'Charmander',
        type1_id: 2,
        type2_id: 0,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 5,
        name: 'Charmeleon',
        type1_id: 2,
        type2_id: 0,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 6,
        name: 'Charizard',
        type1_id: 2,
        type2_id: 0,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 7,
        name: 'Squirtle',
        type1_id: 3,
        type2_id: 0,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 8,
        name: 'Wartortle',
        type1_id: 3,
        type2_id: 0,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
      {
        uuid: uuid(),
        national_id: 9,
        name: 'Blastoise',
        type1_id: 3,
        type2_id: 0,
        status: 'Not Caught',
        created_by: 'Lucas Anderson',
        created_at: new Date(),
        updated_by: 'Lucas Anderson',
        updated_at: new Date()
      },
    ], {})
  },

  down: function (queryInterface, Sequelize) {}
};
