const { Model, DataTypes, Sequelize } = require('sequelize')

const BAR_TABLE = 'bars'

const BarSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class Bar extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: BAR_TABLE,
      modelName: 'Bar',
      timestamps: false,
    }
  }
}

module.exports = { Bar, BarSchema, BAR_TABLE }
