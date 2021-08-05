"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = express_1.Router();
router.get('/', usuarios_1.getUsuarios);
router.post('/', usuarios_1.postUsuarios);
router.put('/:id', usuarios_1.putUsuarios);
router.patch('/:id', usuarios_1.patchUsuarios);
router.delete('/:id', usuarios_1.deleteUsuarios);
exports.default = router;
//# sourceMappingURL=usuarios.js.map