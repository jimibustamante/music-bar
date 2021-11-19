const { Model, DataTypes, Sequelize } = require('sequelize')

const PLAYLIST_SONG_TABLE = 'playlist_songs'

const PlaylistSongSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  playlist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  song_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class PlaylistSong extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PLAYLIST_SONG_TABLE,
      modelName: 'PlaylistSong',
      timestamps: false,
    }
  }

  static associate(models) {
    this.belongsTo(models.Playlist, {
      foreignKey: 'playlist_id',
      as: 'playlist',
    })
    this.belongsTo(models.Song, {
      foreignKey: 'song_id',
      as: 'song',
    })
  }
}

module.exports = { PlaylistSong, PlaylistSongSchema, PLAYLIST_SONG_TABLE }
