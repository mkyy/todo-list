function createTask(){
    //auxs
    var id = 0;
    const display = document.getElementById("display");

    //creating my div
    const div = document.createElement('div');
    div.className = "task-wrapper";
    const newTask = document.getElementById("newInput").value;

    //creating my button
    const but = document.createElement('button');
    but.textContent = 'Remove';
    but.className = 'rmButton';
    but.onclick = () => {
        const thisButtonDiv = but.parentElement;
        display.removeChild(thisButtonDiv);
    }

    //setting attributes
    div.innerText = newTask;
    div.appendChild(but);

    if(display.childElementCount > 0) {
        div.id = display.childElementCount;
    }else {
        div.id = 0;
    }


    display.appendChild(div);
    document.getElementById("newInput").value = '';
    console.log(div.id)
}
