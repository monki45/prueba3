var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/galeria', function(req, res, next) {
  const imagenes = datos.getAllPeliculas();
  res.render("galeria", { imagenes: imagenes, pelicula: null, title: "Galería de Imágenes" });
});

router.get('/galeria/:id', function(req, res, next) {
  const imagenes = datos.getAllPeliculas();
  const pelicula = datos.getPelicula(req.params.id);
  res.render("galeria", { imagenes: imagenes, pelicula: pelicula, title: "Galería de Imágenes" });
});

router.get("/index", function(req, res, next){  
  res.render("index", { title: "Galeria de index"});
});

module.exports = router;