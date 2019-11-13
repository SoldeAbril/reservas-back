"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
exports.verificarToken = (token) => {
    try {
        let data = jwt.verify(token, 'codigo6', { algorithm: 'RS256' });
        return data;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
};
exports.watchman = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(" ")[1];
        let data = exports.verificarToken(token);
        if (data) {
            next();
        }
        else {
            res.status(401).json({
                message: 'Error',
                content: 'Token expiro o no es valido'
            });
        }
    }
    else {
        res.status(401).json({
            message: 'Error',
            content: 'Falta token'
        });
    }
};
