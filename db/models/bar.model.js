const { Model, DataTypes, Sequelize } = require('sequelize')
const { USER_TABLE } = require('./../models/user.model')
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
  adminId: {
    field: 'admin_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
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

  static associate(models) {
    this.belongsTo(models.User, { as: 'admin' })
    this.hasMany(models.Local, { as: 'locals', foreignKey: 'barId' })
  }
}

module.exports = { Bar, BarSchema, BAR_TABLE }
