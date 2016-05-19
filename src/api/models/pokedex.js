module.exports = function(sequelize, DataTypes) {
  var Pokedex = sequelize.define('Pokedex', {
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    national_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type1_id: DataTypes.INTEGER,
    type2_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.STRING,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Pokedex.belongsTo(models.Type, { foreignKey: 'type1_id', as: 'type1' }),
        Pokedex.belongsTo(models.Type, { foreignKey: 'type2_id', as: 'type2' })
      }
    }
  });

  return Pokedex;
};
