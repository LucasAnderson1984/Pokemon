module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('Type', {
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    reference: DataTypes.INTEGER,
    type: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_by: DataTypes.STRING,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Type.hasMany(models.Pokedex)
      }
    }
  });

  return Type;
}
