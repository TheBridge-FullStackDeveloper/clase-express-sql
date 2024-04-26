const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

router.post("/", PostController.insert);

router.get("/",PostController.getAll);

router.get("/id/:id", PostController.getById);

//localhost:3000/posts/id/7
router.put("/id/:id",PostController.update);

// localhost:3000/posts/id/2
router.delete("/id/:id",PostController.deleteById);

// router.post('/',(req,res)=>{
//     let post = {title:'Post one', body:'This is post number one'};
//     let sql = 'INSERT INTO posts SET ?'
//     db.query(sql,post,(err,result)=> {
//       if(err) throw err;
//       console.log(result);
//       res.send('Post added...')
//     })
//   })

module.exports = router;
