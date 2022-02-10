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

    app.get(`/clientid/:nom`, (req, res) => {
      let nom = req.params.nom;
      db.query(`SELECT idClient FROM clients WHERE nom=?`, [
        nom,
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


    app.delete(`/deleteclient/:id`, (req, res) => {
      let id = req.params.id;
      db.query(`DELETE FROM clients WHERE idClient=?`, [
        id,
      ])
        .then((result) => {
          //res.send(result)
          res.send("Client avec id "+id+" supprimé")
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