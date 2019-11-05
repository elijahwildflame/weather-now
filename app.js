const express = require('express');
const bodyParser = require('body-parser');

const app = express();
 
// setting view engine
app.set('view engine', 'ejs');

// middelware/
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

/*
    routes
*/

// GET/
app.get('/', function (req, res) {
    res.render('home.ejs');
});

app.post('/whatever-we-want', function(req, res){
    console.log(req);
});
 
app.listen(3000, function(){
    console.log('server is live on port: 3000');
});