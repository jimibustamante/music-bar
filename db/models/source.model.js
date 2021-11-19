const { Model, DataTypes, Sequelize } = require('sequelize')
const { SONG_TABLE } = require('./song.model')
const SOURCE_TABLE = 'sources'

const SourceSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sourceType: {
    type: DataTypes.STRING,
    field: 'source_type',
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sourceName: {
    type: DataTypes.STRING,
    field: 'source_name',
    allowNull: false,
    defaultValue: 'local',
  },
  songId: {
    type: DataTypes.INTEGER,
    field: 'song_id',
    references: {
      model: SONG_TABLE,
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class Source extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SOURCE_TABLE,
      modelName: 'Source',
      timestamps: false,
    }
  }
}

module.exports = { Source, SourceSchema, SOURCE_TABLE }
