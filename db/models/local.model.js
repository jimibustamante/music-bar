const { Model, DataTypes, Sequelize } = require('sequelize')
const { BAR_TABLE } = require('./bar.model')
const LOCAL_TABLE = 'locals'

const LocalSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [3, 50],
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  barId: {
    field: 'bar_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: BAR_TABLE,
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

class Local extends Model {
  static associate(models) {
    this.belongsTo(models.Bar, {
      foreignKey: 'barId',
      as: 'bar',
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SOURCE_TABLE,
      modelName: 'Source',
      timestamps: false,
    }
  }
}

module.exports = { Local, LocalSchema, LOCAL_TABLE }
