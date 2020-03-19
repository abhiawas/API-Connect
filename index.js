var express   =  require("express"),
    request   =  require("request"),      
 bodyParser   =  require("body-parser"),
        app   =  express();
const queryString = require('query-string');
const basicAuth = require('express-basic-auth')
 
        
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var   userName = null;
var  Password = null;
var originalUrl = null;
var login;
var location;
var confirmationCode;

app.get('/auth',(req,res)=>{
    res.render("auth");
})

app.get('/home',(req,res)=>{
 res.send("Your Apps Landing Page");
})


app.get('/login', function (req, res) {
        res.render("login", { login: login });
        location = req.query['original-url'];
        });


app.post('/login', function (req, res) {
        user = req.body.UserName;
        confirmationCode = req.body.Password;
        location = location + '&username=' + user + '&confirmation=' + confirmationCode;
        res.setHeader('Location', location);
        res.status(302);
        res.send("go Ahead")  
    })

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port ", port);

