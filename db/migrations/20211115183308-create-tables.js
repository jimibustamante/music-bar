'use strict'

const { UserSchema, USER_TABLE } = require('../models/user.model')
const { BarSchema, BAR_TABLE } = require('../models/bar.model')
const { PlaylistSchema, PLAYLIST_TABLE } = require('../models/playlist.model')
const { SongSchema, SONG_TABLE } = require('../models/song.model')
const {
  PlaylistSongSchema,
  PLAYLIST_SONG_TABLE,
} = require('../models/playlist_song.model')
const { LocalSchema, LOCAL_TABLE } = require('../models/local.model')
const { SourceSchema, SOURCE_TABLE } = require('../models/source.model')

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(BAR_TABLE, BarSchema)
    await queryInterface.createTable(PLAYLIST_TABLE, PlaylistSchema)
    await queryInterface.createTable(SONG_TABLE, SongSchema)
    await queryInterface.createTable(PLAYLIST_SONG_TABLE, PlaylistSongSchema)
    await queryInterface.createTable(LOCAL_TABLE, LocalSchema)
    await queryInterface.createTable(SOURCE_TABLE, SourceSchema)
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(BAR_TABLE)
    await queryInterface.dropTable(PLAYLIST_TABLE)
    await queryInterface.dropTable(SONG_TABLE)
    await queryInterface.dropTable(PLAYLIST_SONG_TABLE)
    await queryInterface.dropTable(LOCAL_TABLE)
    await queryInterface.dropTable(SOURCE_TABLE)
  },
}
