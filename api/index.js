const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const Database = require('./Database');

const app = express();
const port = 3001;


app.use(express.json());
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());

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


app.get('/clients' ,(req, res) => {
    if (res) {
      db.query("SELECT * FROM clients")
        .then((result) => {
          res.send(result)
        })
        .catch((err) => {
          if (err) {
            console.log(err);
            res.status(404).send({
              statusCode: 404,
              id: 1,
              message: err.data,
              content: err
            })
          }
        })
    }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});