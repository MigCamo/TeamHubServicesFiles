const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('document', {
    IdDocument: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Path: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Extension: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdProject: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'document',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdDocument" },
        ]
      },
    ]
  });
};
