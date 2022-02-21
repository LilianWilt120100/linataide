const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const Database = require('./Database');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new Database({
    user:'root',
    host: 'localhost',
    password:'',
    database:'linataide',
  })


var del = db.connection._protocol._delegateError;

db.connection._protocol._delegateError = function (err, sequence) {
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};


app.get('/', (req, res) => {
  res.send('Hello World! This a test for Linataide app')
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


require('./clients/clients.js')(app,db);
require('./rdv/rdv.js')(app,db);