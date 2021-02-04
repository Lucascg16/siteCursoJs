var lista = document.getElementById('lista')
var vet = []
var res = document.getElementById('res')
var num = document.getElementById('num')

function add() {
    var n = Number(num.value)
    if (isNumero(n) && !inLista(n, vet)) {
        vet.push(n)
        var item = document.createElement('option')
        item.text = `O número ${n} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Número invalido ou ja adicionado')
    }
    num.value = ''
    num.focus()
}
function analisar() {
    if (vet.length != 0) {
        var soma = 0
        var maior = vet[0]
        var menor = vet[0]
        var media = 0
        for(var pos in vet){
            soma += vet[pos]
            if(vet[pos] > maior){
                maior = vet[pos]
            }
            if(vet[pos] < menor){
                menor = vet[pos]
            }
        }
        media = soma/vet.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram adicionados ${vet.length} números</p>`
        res.innerHTML += `<p>O maior número foi ${maior}</p>`
        res.innerHTML += `<p>O menor número foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`

    }else{
        alert('Adcione um número')
    }
}

//funções de funcionamento...
function isNumero(n) {
    if (1 <= (n) && (n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf((n)) != -1) {
        return true
    } else {
        return false
    }
}