

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

let addHeadButton = document.getElementById('addHead');


addToDoButton.addEventListener('click' , function(){
    let paragraph = document.createElement('div');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click', function(){
        // paragraph.style.display = 'none';
        paragraph.remove();
    });

})



addHeadButton.addEventListener('click', function(){
    let head = document.createElement('h1');
    head.classList.add('heading');

    toDoContainer.appendChild(head);
    head.innerHTML = inputText.value;
    inputText.value = "";

    head.addEventListener('click', function(){
        head.style.textDecoration = 'Line-through';
        head.style.textDecorationColor = 'yellow';
    });

    head.addEventListener('dblclick', function(){
        toDoContainer.removeChild(head);
    });

    clearToDo.addEventListener('click', function(){
        head.remove();
    });
})

