//


//procurar o botao
document.querySelector("#add-time")
    // quando clicar no botao
    .addEventListener('click', cloneField)


// executar uma açao
function cloneField() {
    // Duplicar os campos, que campo??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // para clonar o item e todo conteudo dentro

    // pegar os campos. quais?
    const fields = newFieldContainer.querySelectorAll('input') //pegar os campos

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar field do momento e limpa ele
        field.value = ""
    })

    // Colocar na pagina. onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}