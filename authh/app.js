var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
// var bodyParser = require("body-parser");
var User = require("./userModel");


var port = 8084 || process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/userCreds',{useNewUrlParser:true,useUnifiedTopology: true,})
// var conn = mongoose.connection;

// conn.on('connected',()=>{
//     console.log('MongoDB connected')
// });

mongoose.connection.on('connected',()=>{
    console.log("DB connected");
})

mongoose.connection.on('error',(err)=>{
    if(err)
    console.log(err)
});

app.post('/adduser',function(req,res){
    var userObj = new User({
        userid : req.body.uid,
        password : req.body.pass
    });
    console.log(userObj);
    userObj.save((err)=>{
        console.log(userObj);
        if(err){
        res.send(err.message)
        } else
        res.send('Users credentials added successfully!');
    })
})


app.post('/login', function (req, res, next) {
    if (req.body.uid && req.body.pass) {
     User.authenticate(req.body.uid, req.body.pass, function (error, user) {
       if (error || !user) {
         error.status = 401;
         return next(error);
       } else {
       //res.send(user);
       res.redirect('/home');
       }
     });
   } else {
     var err = new Error('Something went wrong!');
     err.status = 400;
     return next(err);
   }
 });

 
 app.get('/home',(req , res)=>{
    res.send('Welcome to HOME Page!');
  })
 
 app.listen(port,()=>{
     console.log('Server started running on port :'+ port)
 })

 
