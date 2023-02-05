var checkbox = document.querySelector('#check')
var texto = document.querySelector('#preco1')
var texto1 = document.querySelector('#preco2')
var texto2 = document.querySelector('#preco3')
var english = document.querySelector('#ingles')

checkbox.addEventListener('click', () => {

    if (checkbox.checked) {
        texto.textContent = "R$ 199,99"
        texto1.textContent = "R$ 249,99"
        texto2.textContent = "R$ 399,99"


    } else {
        texto.textContent = "R$ 19,99"
        texto1.textContent = "R$ 24,99"
        texto2.textContent = "R$ 39,99"
    }
})

let darki = document.querySelector('#dark')


darki.addEventListener('click', () => {

    if (darki.checked) {
        document.getElementsByTagName("body")[0].style.background = "#242731"
        document.getElementsByTagName("div")[3].style.background = "#4B4B4D"
        document.getElementsByTagName("div")[17].style.background = "#4B4B4D"
        document.querySelector('#preco1').style.color = "white"
        document.querySelector('#preco3').style.color = "white"
        document.querySelector(".card1").style.color = "white"
        document.querySelector(".card3").style.color = "white"
        document.querySelector(".imagem").style.background = "none"

    } else {
        document.getElementsByTagName("body")[0].style.background = ""
        document.getElementsByTagName("div")[3].style.background = ""
        document.getElementsByTagName("div")[17].style.background = ""
        document.querySelector('#preco1').style.color = ""
        document.querySelector('#preco3').style.color = ""
        document.querySelector(".card1").style.color = ""
        document.querySelector(".card3").style.color = ""
    }
})
