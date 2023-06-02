var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ---------Segundo Gráfico-------------------------------------------------------------------------------------------------------------------------------------------
function buscarUltimasMedidas2(req, res) {

    const limite_linhas = 7;

    var idUsuario2 = req.params.idUsuario2;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas2(idUsuario2, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal2(req, res) {

    var idUsuario2 = req.params.idUsuario2;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal2(idUsuario2).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2
}