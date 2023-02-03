let checkbox = document.querySelector('#check')
var texto = document.querySelector('#preco1')
var texto1 = document.querySelector('#preco2')
var texto2 = document.querySelector('#preco3')

checkbox.addEventListener('click', () => {

    if (checkbox.checked) {
        /* document.getElementsByTagName("body")[0].style.background = "#242731"
        document.getElementsByTagName("div")[2].style.background = "#4B4B4D"
        document.getElementsByTagName("div")[16].style.background = "#4B4B4D"
        document.querySelector('#preco1').style.color = "white"
        document.querySelector('#preco3').style.color = "white" */
        texto.textContent = "R$ 199,99"
        texto1.textContent = "R$ 249,99"
        texto2.textContent = "R$ 399,99"


    } else {
        /* document.getElementsByTagName("body")[0].style.background = ""
        document.getElementsByTagName("div")[2].style.background = ""
        document.getElementsByTagName("div")[16].style.background = ""
        document.querySelector('#preco1').style.color = ""
        document.querySelector('#preco3').style.color = "" */
        texto.textContent = "R$ 19,99"
        texto1.textContent = "R$ 24,99"
        texto2.textContent = "R$ 39,99"
    }
})

