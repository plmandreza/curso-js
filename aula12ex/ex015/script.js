function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //formulário-ano
    var res = document.querySelector('div#res') //maneira mais morderna
    if (fano.value.length == 0 || fano.value > ano) { //Number(fano.value)
       alert('Verifique os dados e tente novamente') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //teste: res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        //criação de img dinâmica
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // equivale a <img id="foto"> no HTML
        if (fsex[0].checked) { //masculino selecionado
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'foto-adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = 'center' //centralizar texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adicionar elemento img
    }
}