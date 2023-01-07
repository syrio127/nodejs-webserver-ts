"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
http_1.default.createServer((req, res) => {
    res.write('Hola Mundo!');
    res.end();
})
    .listen(8080);
console.log('Escuchando el puerto', 8080);
//# sourceMappingURL=app_old.js.map