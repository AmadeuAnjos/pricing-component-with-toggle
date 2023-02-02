let checkbox = document.querySelector('#check')

//console.log(checkbox.checked)

checkbox.addEventListener('click', () => {

    if (checkbox.checked) {
        document.getElementsByTagName("body")[0].style.background = "black"
    } else {
        console.log('Teste')
        document.getElementsByTagName("body")[0].style
    }
})