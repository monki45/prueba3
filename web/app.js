const express = require('express');
const path = require('path');
const dataProvider = require('./data/dataprovider');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  try {
    const posts = dataProvider.getAllPosts();
    res.render('index', { posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  try {
    const post = dataProvider.getPostById(postId);
    if (post) {
      res.render('post', { post });
    } else {
      res.status(404).send('Post no encontrado');
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).send('Error interno del servidor');
  }
});

module.exports = app;