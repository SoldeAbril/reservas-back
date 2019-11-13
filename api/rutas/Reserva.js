"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Guards_1 = require("../utils/Guards");
const Reserva_1 = require("../controladores/Reserva");
exports.reserva_router = express_1.Router();
exports.reserva_router.post('/reservabyfechas/:aula_id', Guards_1.watchman, Reserva_1.getReservaByFechas);
