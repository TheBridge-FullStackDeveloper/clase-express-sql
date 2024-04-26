const db = require("../config/database");

const PostController ={
    insert (req, res) {
        let sql = `INSERT INTO posts (title, body) values
              ('${req.body.title}', '${req.body.body}');`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Post added...");
        });
      },
      getAll(req, res) {
        let sql = "SELECT * FROM posts";
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
      },
      getById(req, res){
        let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
      },
      update(req, res) {
        let sql = `UPDATE posts SET title = '${req.body.title}' WHERE id = ${req.params.id}`;
        db.query(sql, (err) => {
          if (err) throw err;
          res.send("Post updated...");
        });
      },
      deleteById(req, res) {
        let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Post deleted");
        });
      }
}

module.exports = PostController