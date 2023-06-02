var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''
//COLOCAR O ID DO USUARIO
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

    instrucaoSql2 = ''
//COLOCAR O ID DO USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}

function buscarMedidasEmTempoReal2(idUsuario2) {

    instrucaoSql2 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas group by date_format(dtHorario, '%m');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}


// ----------Terceiro Gráfico------------------------------------------------------------------------------------------------------------------------
function buscarUltimasMedidas3(idUsuario3, limite_linhas) {

    instrucaoSql3 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql3 = `select resultado, count(resultado) as num from respostas group by resultado`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql3 = `select resultado, count(resultado) as num from respostas group by resultado`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql3);
    return database.executar(instrucaoSql3);
}

function buscarMedidasEmTempoReal3(idUsuario3) {

    instrucaoSql3 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql3 = `select resultado, count(resultado) as num from respostas group by resultado`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql3 = `select resultado, count(resultado) as num from respostas group by resultado`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql3);
    return database.executar(instrucaoSql3);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidas3,
    buscarMedidasEmTempoReal3
}
