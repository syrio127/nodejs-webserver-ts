"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hbs_1 = __importDefault(require("hbs"));
const path_1 = __importDefault(require("path"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set('view engine', 'hbs');
const partialsPath = path_1.default.join(__dirname, '..', '/views/partials');
hbs_1.default.registerPartials(partialsPath);
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Rodrigo Riveros',
        titulo: 'Curso de Node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Rodrigo Riveros',
        titulo: 'Curso de Node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Rodrigo Riveros',
        titulo: 'Curso de Node'
    });
});
app.listen(port, () => {
    console.log(`Example app running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map