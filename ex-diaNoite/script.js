function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var tx = window.document.getElementById('hr')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = 'Agora são '+hora+' horas'
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        tx.innerHTML = 'Bom dia'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
        tx.innerHTML = 'Boa tarde'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
        tx.innerHTML = 'Boa noite'
    }
}