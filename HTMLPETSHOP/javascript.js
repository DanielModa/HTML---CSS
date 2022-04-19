'use strict';
//variáveis
let somaTosa = 0;
let somaRacao = 0;
let somaAdestrar = 0;
let vendaTosa = 0.00;
let vendaRacao = 0.00;
let vendaAdestrar = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos

btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e){
    if(document.getElementById('tosa').checked){
        somaTosa = somaTosa + 1;
        vendaTosa = vendaTosa + 25.00;
        document.getElementById('resultadoTosa').innerHTML = somaTosa;
        document.getElementById('vendaTosa').innerHTML = vendaTosa.toFixed(2);

    }else if(document.getElementById('racao').checked){
        somaRacao = somaRacao + 1;
        vendaRacao = vendaRacao + 30.00;
        document.getElementById('resultadoRacao').innerHTML = somaRacao;
        document.getElementById('vendaRacao').innerHTML = vendaRacao.toFixed(2);

    } else if(document.getElementById('adestrar').checked){
        somaAdestrar = somaAdestrar + 1;
        vendaAdestrar = vendaAdestrar + 50.00;
        document.getElementById('resultadoAdestrador').innerHTML = somaAdestrar;
        document.getElementById('vendaAdestrador').innerHTML = vendaAdestrar.toFixed(2);
    }
}

function estorno(e){
    if(document.getElementById('tosa').checked){
        somaTosa = somaTosa - 1;
        vendaTosa = vendaTosa - 25.00;
        if(somaTosa < 0){
            somaTosa = 0;
            vendaTosa = 0.00;
        }
        document.getElementById('resultadoTosa').innerHTML = somaTosa;
        document.getElementById('vendaTosa').innerHTML = vendaTosa.toFixed(2);
    }else if(document.getElementById('racao').checked){
        somaRacao = somaRacao - 1;
        vendaRacao = vendaRacao - 30.00;
        if(somaRacao < 0){
            somaRacao = 0;
            vendaRacao = 0.00;
        }
        document.getElementById('resultadoRacao').innerHTML = somaTosa;
        document.getElementById('vendaRacao').innerHTML = vendaRacao.toFixed(2);
    } else if(document.getElementById('adestrar').checked){
        somaAdestrar = somaAdestrar - 1;
        vendaAdestrar = vendaAdestrar - 50.00;
        if(somaAdestrar < 0){
            somaAdestrar = 0;
            vendaAdestrar = 0.00;
        }
        document.getElementById('resultadoAdestrador').innerHTML = somaTosa;
        document.getElementById('vendaAdestrador').innerHTML = vendaAdestrar.toFixed(2);
    }
}

function planilha(e){
    TableToExcel.convert(document.getElementById('table'));
}