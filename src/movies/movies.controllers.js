const Movies = require("../models/movies.models");
const uuid = require("uuid");

//controlador para llamar todas la peliculas
const getAllMovies = async () => {
  const data = await Movies.findAll(); // traer todas las peliculas ' select *from movies
  return data;
};

//getAllMovies()
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

//controlador para crear nuevas peliculas
const createMovie = async (data) => {
  const newMovie = await Movies.create({
    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate,
  });
  //const res = Movies.create(newMovie) - otra forma de llamar
  return newMovie;
};

//createMovie({
//name: 'Interstellar',
//genre: 'Sci-Fi',
//duration: 190,
//releaseDate:'2012/06/21'
//})
//.then (res => console.log(res))
//.catch(err => console.log(err))

const getMovieById = async (id) => {
  const data = await Movies.findOne({
    where: {
      id
    },
  });
  //? Select * from movies where id = id;
  return data;
};

//getMovieById('Interstellar')
//.then((res) => console.log(res))
//.catch((err) => console.log(err))

const editMovie = async (id, data) => {
  const res = await Movies.update(data, {
    where: {
      id
    },
  });
  return res;
};

//editMovie("0ccfcac6-bb3e-4e69-acd0-4a5d312b6c44", {
  //name: "Lord of the rings",
  //duration: 180,
  //genre: "Age",
//})
  //.then((res) => {
    //console.log(res);
  //})
  //.catch((err) => {
    //console.log(err);
  //});

  const deleteMovie = async(id) => {
    const data = await Movies.destroy({
      where: {
        id
      }
    })
    return data
  }

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  editMovie, 
  deleteMovie
};
