var i = 0                          //indice option
var options = []
var div2 = document.getElementById('d2')
var sel = document.createElement('select')
var res = document.getElementById('res')
var optionsn = []
var max = -Infinity
var min = Infinity
var opt = 0
var soma = 0
var resetAll = -1

function finalizar() {                                                      //MOSTRAR RESULTADOS (BOTAO DE FINALIZAR)
    if (options.length != 0) {                                            //NAO DEIXA APERTAR O BOTAO ANTES DO NUMERO       
        resetAll++                          //FAZ PARAR DE FUNCIONAR A INSERÇÃ0 DE NÚMEROS E RESETA
        if (resetAll == 0) {                                            //RESULTADO
            for (; opt < (optionsn.length); opt++) {
                if (Number(optionsn[opt]) >= max) {
                    max = Number(optionsn[opt])
                } if (Number(optionsn[opt]) <= min) {
                    min = Number(optionsn[opt])
                }
                soma += Number(optionsn[opt])
            }
            function medianoFunction(medNum) {                         //CALCULAR MEDIANO
                optionsn.sort((a, b) => a - b)
                if (medNum % 2 != 0) {
                    var mediano = Number(optionsn[parseInt(medNum / 2)])
                }
                else {
                    var mediano = (Number(optionsn[medNum / 2 - 1]) + Number(optionsn[medNum / 2])) / 2
                }
                return mediano
            }

            var media = (soma / optionsn.length)
            var reset = document.getElementById('reset');
            reset.style.display = "block";
            res.innerHTML = `Total de números inseridos: <strong>${optionsn.length}</strong></br>
            Maior número: <strong>${max.toFixed(2).replace('.', ',')}</strong></br>
            Menor número: <strong>${min.toFixed(2).replace('.', ',')}</strong></br>
            Soma dos números: <strong>${soma.toFixed(2).replace('.', ',')}</strong></br>
            Média: <strong>${media.toFixed(2).replace('.', ',')}</strong></br>
            Mediano: <strong>${medianoFunction(optionsn.length).toFixed(2).replace('.', ',')}</strong>`
        } 
    } else if (options.length == 0) {
        allBorders(2)
        error_label.innerHTML = 'Insira um número antes de finalizar!'
    }
}

function reset(){
    is = 1    
            i = 0
            options = []
            optionsn = []
            max = -Infinity
            min = Infinity
            for (var optRemove = 0; optRemove != opt; optRemove++) {
                sel.removeChild(sel.firstChild)
            }
            div2.removeChild(sel)
            opt = 0
            soma = 0
            res.innerHTML = ''
            error_label.innerHTML = ''
            resetAll = -1
            allBorders(0)
            num.value = ''
            var reset = document.getElementById('reset');
            reset.style.display = "none";
            
}

function inserir() {                                            //BOTAO PARA ADICIONAR NUMERO, CHAMA A FUNCAO SCRIPITMAIN    
    if (num.value != '') { 
        let num = document.getElementById('num')
            if (res.innerHTML != '') {            //INSERE MAIS UM NUMERO DEPOIS DE FINALIZAR, RESETANDO RESUTLADO
                allBorders(0)
                res.innerHTML = ''
                resetAll = -1
                scriptSelect()
            } else {
                scriptSelect()
            }
            num.value = ''
    } else {
        allBorders(3)
    }
}

function scriptSelect() {                         //FUNCAO QUE COLOCA OS NUMEROS E CRIA O SELECT, OPTION
    for (var is = 0; is != 1; is++) {                               //CRIA UM SELECT E PARA
        div2.appendChild(sel) 
        sel.setAttribute('readOnly', '')  
        sel.setAttribute('size', '5')
    }
    if (i != -1) {                                  //CRIA OPTION E COLOCA O NUMERO TODA VEZ QUE CLICA INSERIR
        options[i] = document.createElement('option')
        sel.appendChild(options[i]).setAttribute('id', `opt${i}`)
        options[i].innerHTML = `${num.value}`
        optionsn[i] = document.getElementById(`opt${i}`).value
        i++
        removeBorders()
    }
}

                            //BORDAS

var cl =    ['invisible', 'green', 'red', 'redalert']       //CLASS
var error_label = document.querySelector('label')           //ERRO QUANDO FAZ ALGO DE ERRADO


function desfoco() {                                         //QUANDO O BOTAO NUM PARA DE SER FOCADO
    let num = document.getElementById('num')             //VERIFICA SE É REPETIDO
    if (num.value != '') {
        allBorders(1)                                       //NUMERO CORRETO
    } else if (num.value == '')  {                             //LIMPA AS BORDAS QUANDO TA SEM NUMERO
        allBorders(0)
    } else if (num.classList == (cl[3])) {                      //SE TIVER COM REDALERT OU ALERTA DE RESET NAO TIRA
    }
}

function removeBorders() {                                                            //LIMPA A BORDA
    return error_label.innerHTML = '',
    num.classList.remove('invisible', 'green', 'red', 'redalert')
}

function allBorders(bNum) {
    removeBorders()
    if (bNum == 0) {                                                            //CHAMA BORDA TRANSPARENTE
        return num.classList.add(cl[0])
    } else if (bNum == 1) {                                                     //CHAMA BORDA VERDE
        return num.classList.add(cl[1])
    } else if (bNum == 2) {                                                     //CHAMA BORDA VERDE E ERRO
        return num.classList.add(cl[2])
    } else if (bNum == 3) {
        return num.classList.add(cl[3]),
        error_label.innerHTML = 'Por favor, insira um número válido!'
    }
}






//backup sem limite de números