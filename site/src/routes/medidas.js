var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimas2/:idUsuario2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real2/:idUsuario2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})

router.get("/ultimas3/:idUsuario3", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real3/:idUsuario3", function (req, res) {
    medidaController.buscarMedidasEmTempoReal3(req, res);
})

module.exports = router;