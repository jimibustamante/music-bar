const { Model, DataTypes, Sequelize } = require('sequelize')
const { BAR_TABLE } = require('./../models/bar.model')

const PLAYLIST_TABLE = 'playlists'

const PlaylistSchema = {
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
  barId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'bar_id',
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

class Playlist extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PLAYLIST_TABLE,
      modelName: 'Playlist',
      timestamps: false,
    }
  }
}

module.exports = { Playlist, PlaylistSchema, PLAYLIST_TABLE }
