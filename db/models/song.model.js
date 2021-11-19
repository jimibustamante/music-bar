const { Model, DataTypes, Sequelize } = require('sequelize')

const SONG_TABLE = 'songs'

const SongSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  album: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  lyrics: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class Song extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SONG_TABLE,
      modelName: 'Song',
      timestamps: false,
    }
  }
}

module.exports = { Song, SongSchema, SONG_TABLE }
