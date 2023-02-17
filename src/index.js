const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json);


//Logger
app.use(morgan('combined'));

//Template Engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  res.render('search');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})