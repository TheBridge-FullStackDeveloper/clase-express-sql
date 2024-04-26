const express = require("express");
const app = express();
const db = require("./config/database")
const PORT = 3000;

app.use(express.json());

app.use("/posts",require("./routes/posts"))

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id INT AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created...");
  });
});



app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
