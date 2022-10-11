const express = require('express');
const db = require('./tools/database');
const app = express();
const config = require('./config');
const initModels = require('./models/init.models');
const moviesRouter = require('./movies/movies.router');


db.authenticate()
  .then(() => console.log('Autentication succesfully'))
  .catch((err) => console.log(err))

 db.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) =>{
  res.status(200).json({message:'Server OK!'})
});

//aqui le pasamos el prefijo/movies para hacer referencia a todas las rutas de movies.router
app.use('/movies', moviesRouter)


app.listen(config.port, () => {
  console.log(`server started at port ${config.port}`);
})