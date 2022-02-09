module.exports = function (app, db) {

    app.get('/rdvs' ,(req, res) => {
        if (res) {
          db.query("SELECT * FROM rdv")
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

    app.get(`/rdv/:id`, (req, res) => {
      let id = req.params.id;
      db.query(`SELECT * FROM rdv WHERE idRdv=?`, [
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


    app.get(`/rdvbyclient/:idClient`, (req, res) => {
        let idClient = req.params.idClient;
        db.query(`SELECT * FROM rdv WHERE idClient=?`, [
          idClient,
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