var addToDoButton = document.getElementById('add-btn');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

});

inputField.addEventListener('keypress', function(e){
    if  (e.code === 'Enter') {
        var paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
    }
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
});
