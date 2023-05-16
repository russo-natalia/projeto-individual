var express = require("express");
var router = express.Router();

var faleController = require("../controllers/faleController");

router.get("/", function (req, res) {
    faleController.testar(req, res);
});

router.get("/listar", function (req, res) {
    faleController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    faleController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;