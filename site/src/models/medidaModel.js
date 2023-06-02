var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select resultado, count(resultado) as num from respostas group by resultado`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select resultado, count(resultado) as num from respostas group by resultado`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select resultado, count(resultado) as num from respostas group by resultado`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select resultado, count(resultado) as num from respostas group by resultado`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// ----------Segundo Gráfico------------------------------------------------------------------------------------------------------------------------
function buscarUltimasMedidas2(idUsuario2, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal2(idUsuario2) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2
}
