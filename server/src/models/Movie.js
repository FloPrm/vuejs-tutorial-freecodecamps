module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    producer: DataTypes.STRING,
    year: DataTypes.INTEGER,
    posterUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    downloadLink: DataTypes.STRING
  })

  return Movie
}
