const tasks = [];

function idGenerator(){
    var timestamp = new Date();

    var id = timestamp.getHours().toString() +
             timestamp.getMinutes().toString() +
             timestamp.getSeconds().toString() +
             timestamp.getMilliseconds().toString();

    return id;
}

function createNewItem(){
    
    const taskDescription = document.getElementById('newInput').value;

    var task = {
        id: idGenerator(),
        description: taskDescription
    }

    tasks.push(task);
    displayUpdate();

}

function displayUpdate(){

    var list = '<ul>';

    tasks.forEach((task =>{
        list += '<li>'+task.description+'</li>';
        list += '<button onclick="deleteTask">REMOVE</button>'
    }));

    list += '</ul>'
    document.querySelector('#newInput').value = '';
    document.querySelector('.display').innerHTML = list;
}