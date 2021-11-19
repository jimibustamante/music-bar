const { User, UserSchema } = require('./user.model.js')
const { Bar, BarSchema } = require('./bar.model.js')
const { Local, LocalSchema } = require('./local.model.js')
const { Playlist, PlaylistSchema } = require('./playlist.model.js')
const { Song, SongSchema } = require('./song.model.js')
const { PlaylistSong, PlaylistSongSchema } = require('./playlistSong.model.js')
const { Source, SourceSchema } = require('./source.model.js')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Bar.init(BarSchema, Bar.config(sequelize))
  Local.init(LocalSchema, Local.config(sequelize))
  Playlist.init(PlaylistSchema, Playlist.config(sequelize))
  Song.init(SongSchema, Song.config(sequelize))
  PlaylistSong.init(PlaylistSongSchema, PlaylistSong.config(sequelize))
  Source.init(SourceSchema, Source.config(sequelize))

  User.associate(sequelize.models)
  Bar.associate(sequelize.models)
  Local.associate(sequelize.models)
  Playlist.associate(sequelize.models)
  Song.associate(sequelize.models)
  PlaylistSong.associate(sequelize.models)
}

module.exports = setupModels
