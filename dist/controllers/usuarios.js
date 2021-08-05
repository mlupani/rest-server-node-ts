"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUsuarios = exports.deleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuarios = void 0;
const config_1 = __importDefault(require("../database/config"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield config_1.default.query('SELECT id, nombre FROM usuarios', {
        model: usuario_1.default,
    });
    const users = usuarios.map((val) => val);
    res.json({
        msg: 'getUsuarios',
        users
    });
});
exports.getUsuarios = getUsuarios;
const postUsuarios = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuarios',
        body
    });
};
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => {
    const { params: { id } } = req;
    res.json({
        msg: 'putUsuarios',
        id
    });
};
exports.putUsuarios = putUsuarios;
const deleteUsuarios = (req, res) => {
    const { params: { id } } = req;
    res.json({
        msg: 'deleteUsuarios',
        id
    });
};
exports.deleteUsuarios = deleteUsuarios;
const patchUsuarios = (req, res) => {
    const { params: { id } } = req;
    res.json({
        msg: 'patchUsuarios',
        id
    });
};
exports.patchUsuarios = patchUsuarios;
//# sourceMappingURL=usuarios.js.map