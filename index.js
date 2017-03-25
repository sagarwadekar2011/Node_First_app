const express = require('express');
const hbs = require('hbs');


var app = express();
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.use((req, res,next) =>{
    res.render('maintenence.hbs');
})



app.get('/',(req,res) => {

    res.render('home.hbs', {
        welcomeMessage : 'Welcome to the world of Node',
        userName :'Sagar',
        currYear : new Date().getFullYear(),
        pageTitle :'Home Page For the Application'
    });

});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle : 'About page',
        currYear : new Date().getFullYear()
    });
});

app.get('/bad', (req,res) => {
    res.send({'statusCode':'Bad Request'});
})

app.listen(3000,() => {
    console.log('Listening to the Port 3000');
});

