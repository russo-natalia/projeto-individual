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
    medidaController.buscarUltimasMedidas3(req, res);
});

router.get("/tempo-real3/:idUsuario3", function (req, res) {
    medidaController.buscarMedidasEmTempoReal3(req, res);
})

router.get("/ultimas4/:idUsuario4", function (req, res) {
    medidaController.buscarUltimasMedidas4(req, res);
});

router.get("/tempo-real4/:idUsuario4", function (req, res) {
    medidaController.buscarMedidasEmTempoReal4(req, res);
})

router.get("/ultimas5/:idUsuario5", function (req, res) {
    medidaController.buscarUltimasMedidas5(req, res);
});

router.get("/tempo-real5/:idUsuario5", function (req, res) {
    medidaController.buscarMedidasEmTempoReal5(req, res);
})

router.get("/ultimas6/:idUsuario6", function (req, res) {
    medidaController.buscarUltimasMedidas6(req, res);
});

router.get("/tempo-real6/:idUsuario6", function (req, res) {
    medidaController.buscarMedidasEmTempoReal6(req, res);
})

module.exports = router;