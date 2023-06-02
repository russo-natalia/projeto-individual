var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimas/:idUsuario2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real/:idUsuario2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})

module.exports = router;