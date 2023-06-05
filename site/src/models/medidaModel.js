var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''
//COLOCAR O ID DO USUARIO
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select resultado, count(resultado) as num from respostas  where fkUsuario = ${1} group by resultado`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select resultado, count(resultado) as num from respostas where fkUsuario = ${1} group by resultado`;
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
        instrucaoSql = `select resultado, count(resultado) as num from where fkUsuario = ${1} respostas group by resultado`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select resultado, count(resultado) as num from respostas where fkUsuario = ${1} group by resultado`;
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
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas where fkUsuario = ${1} group by date_format(dtHorario, '%m');`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas where fkUsuario = ${1} group by date_format(dtHorario, '%m');`;
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
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas where fkUsuario = ${1} group by date_format(dtHorario, '%m');`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select date_format(dtHorario, '%m') as mes, count(*) as tentativas from respostas where fkUsuario = ${1} group by date_format(dtHorario, '%m');`;
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

// ----------Quarto Gráfico------------------------------------------------------------------------------------------------------------------------
function buscarUltimasMedidas4(idUsuario4, limite_linhas) {

    instrucaoSql4 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql4 = `select artista, count(resultado) as num from respostas group by artista;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql4 = `select artista, count(resultado) as num from respostas group by artista;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql4);
    return database.executar(instrucaoSql4);
}

function buscarMedidasEmTempoReal4(idUsuario4) {

    instrucaoSql4 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql4 = `select artista, count(resultado) as num from respostas group by artista;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql4 = `select artista, count(resultado) as num from respostas group by artista;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql4);
    return database.executar(instrucaoSql4);
}
// ----------Quinto Gráfico------------------------------------------------------------------------------------------------------------------------
function buscarUltimasMedidas5(idUsuario5, limite_linhas) {

    instrucaoSql5 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql5 = `select questao4, count(resultado) as num from respostas group by questao4;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql5 = `select questao4, count(resultado) as num from respostas group by questao4;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql5);
    return database.executar(instrucaoSql5);
}

function buscarMedidasEmTempoReal5(idUsuario5) {

    instrucaoSql5 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql5 = `select questao4, count(resultado) as num from respostas group by questao4;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql5 = `select questao4, count(resultado) as num from respostas group by questao4;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql5);
    return database.executar(instrucaoSql5);
}


// ----------Sexto Gráfico------------------------------------------------------------------------------------------------------------------------
function buscarUltimasMedidas6(idUsuario6, limite_linhas) {

    instrucaoSql6 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql6 = `select questao3, count(resultado) as num from respostas group by questao3;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql6 = `select questao3, count(resultado) as num from respostas group by questao3;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql6);
    return database.executar(instrucaoSql6);
}

function buscarMedidasEmTempoReal6(idUsuario6) {

    instrucaoSql6 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql6 = `select questao3, count(resultado) as num from respostas group by questao3;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql6 = `select questao3, count(resultado) as num from respostas group by questao3;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql6);
    return database.executar(instrucaoSql6);
}

// ----------Sétimo Gráfico------------------------------------------------------------------------------------------------------------------------
function buscarUltimasMedidas7(idUsuario7, limite_linhas) {

    instrucaoSql7 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql7 = `select date_format(dtHorario, '%M') as mes, count(*) as num from respostas group by date_format(dtHorario, '%M');`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql7 = `select date_format(dtHorario, '%M') as mes, count(*) as num from respostas group by date_format(dtHorario, '%M');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql7);
    return database.executar(instrucaoSql7);
}

function buscarMedidasEmTempoReal7(idUsuario7) {

    instrucaoSql7 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql7 = `select date_format(dtHorario, '%M') as mes, count(*) as num from respostas group by date_format(dtHorario, '%M');`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql7 = `select date_format(dtHorario, '%M') as mes, count(*) as num from respostas group by date_format(dtHorario, '%M');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql7);
    return database.executar(instrucaoSql7);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidas3,
    buscarMedidasEmTempoReal3,
    buscarUltimasMedidas4,
    buscarMedidasEmTempoReal4,
    buscarUltimasMedidas5,
    buscarMedidasEmTempoReal5,
    buscarUltimasMedidas6,
    buscarMedidasEmTempoReal6,
    buscarUltimasMedidas7,
    buscarMedidasEmTempoReal7
}
