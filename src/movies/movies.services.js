
const moviesControllers = require('./movies.controllers');

// los servicios sirven para atender - servir las peticiones 
const getAllMovies = (req, res) => {
  moviesControllers.getAllMovies()
    .then(data => { //ocupamos .then y .catch para resolver la promesa generadoa por los controladores async y await
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
};

//modificacion parcial
const postMovie = (req, res) => {
  const { name, genre, duration, releaseDate } = req.body;
    if (name && genre && duration && releaseDate){
      moviesControllers.createMovie(data)
      .then(res => {
        res.status(201).json(res)
      })
      .catch(err => {
        res.status(400).json({message: 'Missing data'})
      })
    }
};

const getMovieById = (req, res) => {
  const id = req.params.id
   moviesControllers.getMovieById(id)
    .then(data => {
      if (data){
        res.status(200).json(data)
      }else{
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(404).json({message: err.message})
    })
};

//esta funcion hace modificacion parcial
const patchtMovie = (req, res) => {
  const id = req.params.id
  const { name, genre, duration, releaseDate } = req.body;

  moviesControllers.editMovie(id, { name, genre, duration, releaseDate })
    .then((res) => {
      if(res[0]){
        res.status(200).json({message: `Movie with id: ${id}, edited successfully!`})
      } else{
        res.status(400).json({message: 'Invalid ID'})
      }      
    })
    .catch(error => {
      res.status(400).json({message: error.message})
    })
}

//modificacion completa 
  const putMovie = (req, res) => {
    const id = req.params.id;
    const {name, genre, duration, releaseDate} = req.body
//este if es para validar los datos y generar error si no vienen todos los necesarios 
    if(name && genre && duration && releaseDate){
      moviesControllers.editMovie(id,{name, genre, duration,releaseDate})
      .then((response) => {
  //este if valida si el id existe o no
        if(response[0]){
          res.status(200).json({message: `Movie with ID: ${id}, edited sucessfully!`})
        }else{
          res.status(404).json({message: 'Invalid ID'})
        }
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
    } else{
      res.status(400).json({message:'Missing Data!',fields:{
        name: 'string',
        genre:'string',
        duration: 'integer',
        releaseDate:'YYYY/MM/DD'
      }})
    }
  }

 //accedemos a los parametros variables de uan url -- youtube.com/videos/id = este id es al que accedemos usando req.params.id
  const deleteMovie = (req, res) => {
    const id = req.params.id
    moviesControllers.deleteMovie(id)
      .then((response) => {
        if (response){
          res.status(204).json(response)  
        }else{
          res.status(400).json({message: 'Invalid ID'})
        }
      })
      .catch((err) => {
        res.status(400).json(err)
      })

  }
  

module.exports = {
  getAllMovies,
  postMovie,
  getMovieById,
  patchtMovie,
  deleteMovie,
  putMovie
}
