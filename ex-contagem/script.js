function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || pass.value == 0){
        alert('Preencha as caixas')
    }else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if(p == 0){
            alert('Considerando passo = 1')
            p = 0
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}, `
            }
            res.innerHTML += 'FIM'
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c}, `
            }
            res.innerHTML += 'FIM'
        }
    }
}