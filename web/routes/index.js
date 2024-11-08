var express = require('express');
var router = express.Router();
var datos = require("../data/dataprovider");
 
 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Inicio' });
});
 
 
router.get('/index', function(req, res, next) {
    const posts = datos.getAllPosts();
    res.render("index", { posts: posts, post: null, title: "Inicio de blog" });
});
 
 
router.get('/index/:id', function(req, res, next) {
    const posts = datos.getAllPosts();
    const post = datos.getPostById(req.params.id);
    res.render("index", { posts: posts, post: post, title: post ? post.title : "Artículo no encontrado" });
});
 
module.exports = router;
 