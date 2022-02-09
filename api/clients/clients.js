module.exports = function (app, db) {

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

    app.get(`/client/:id`, (req, res) => {
      let id = req.params.id;
      db.query(`SELECT * FROM clients WHERE idClient=?`, [
        id,
      ])
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
    });
    
  }