var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarFale", function (req, res) {
    usuarioController.cadastrarFale(req, res);
})

router.post("/cadastrarAvaliacao", function (req, res) {
    usuarioController.cadastrarAvaliacao(req, res);
})

router.post("/cadastrarQuiz", function (req, res) {
    usuarioController.cadastrarQuiz(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;