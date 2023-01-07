import express from 'express';
import hbs from 'hbs';
import path from 'path';

//Environment variables support
require('dotenv').config();


const app = express();
//const port = 8080;
const port = process.env.PORT;

//Handlebars setup
app.set('view engine', 'hbs');
const partialsPath = path.join(__dirname,'..', '/views/partials')
hbs.registerPartials( partialsPath);



// Middleware - Servir contenido estático
app.use( express.static('public')); //Este contenido se muestra por sobre cualquier otra opcion de la ruta '/' 

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Rodrigo Riveros',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Rodrigo Riveros',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Rodrigo Riveros',
        titulo: 'Curso de Node'
    })
})

// app.get('*', (req,res) => {
//     const filePath = path.join(__dirname, '..','/public/404.html');
//     res.sendFile(filePath);
// })


app.listen(port, () => {
    console.log(`Example app running at http://localhost:${port}`)
}); 