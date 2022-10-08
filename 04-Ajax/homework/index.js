/*$('#button').click(function(){ 
$.get(`http://localhost:5000/amigos`, function(data){
for (let i = 0; i < data.length; i++) {
     
    // var li =  document.createElement('li');
      //li.innerHTML=(data[i].name)
$('#lista').append(`<li>${data[i].name}</li>`);


}
    })
})*/



$("#boton").click( () => {

    $.get("http://localhost:5000/amigos", function (data) {
    $("#lista").empty();
    for (let c = 0; c < data.length; c++) {
        let li = document.createElement('li');
        li.innerHTML = data[c].name;
        $('#lista').append(li);
    }
    $("#img-carga").hide();
    });
});

const inputAmigo = document.querySelector('#input');
const btnSearch = document.querySelector('#search');
const spanAmigo = document.querySelector('#amigo');

btnSearch.addEventListener('click', function(e){
    let idAmigo =inputAmigo.value;
fetch(`http://localhost:5000/amigos/${idAmigo}`)
.then (res => res.json())
.then (amigo => {
    spanAmigo.innerHTML = amigo.name;

})
})


const inputDelete = document.querySelector('#inputDelete');
const btnDelete = document.querySelector('#delete');
const spanDelete = document.querySelector('#success');

btnDelete.addEventListener('click', function(){
    let idAmigo =inputDelete.value;
fetch(`http://localhost:5000/amigos/${idAmigo}`,{
method: 'DELETE'
})
.then (res => res.json())
.then (()=> {
    spanDelete.innerHTML = 'Amigo borrado';

})
})


