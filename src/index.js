const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = require('./route');
const db = require('./config/db');

// Connect to DB
db.connect();

//Static file
app.use(express.static(path.join(__dirname, 'resource/public')));
console.log(__dirname);

//Method Overrides
app.use(methodOverride('_method'));

// //Middleware
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json);

// //Logger
// app.use(morgan('combined'));

//Template Engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
