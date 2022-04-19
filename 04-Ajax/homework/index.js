var getAmigos = () => {
    var list = $('#lista')
    list.empty();// esto es para que solo se haga el click una vez y no repita la lista de amigos

    $.get('http://localhost:5000/amigos', res => {
        for(let i = 0; i<res.length; i++) {
            list.append(`<li> ${res[i].name}</li>`) // aca saco la lista de amigos del objeto con la propiedad name
        }
    })
}


$('#boton').click(getAmigos);

$('#search').click(() => {
    var id = $('#input').val() // es equivalente a hacer getElementById('input').value. Aca me guardo una variable con lo que busque en la barra de amigos.
    $.get(`http://localhost:5000/amigos/${id}`, res => {
        $('#amigo').text(res.name);
    })
})

$('#delete').click(() => {
    var id = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: () => {
            $('#sucess').text(`amigo numero ${id} borrado con éxito`)
            getAmigos() // refresca automaticamente el que se elimina
        }
    })
})