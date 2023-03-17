const toDoItems = document.getElementsByClassName("to-do-items")[0];

const input = document.getElementById("input");

const trashIcon = document.getElementById("trash");

input.addEventListener("keydown",function(e) {
    if (e.key === "Enter") {
        addItem();
    }
});

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<h1>'+input.value+'</h1>';

    divChild.className = "icons";

    checkIcon.className = "bi bi-pencil";
    checkIcon.addEventListener("click",function(){
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "bi bi-trash";
    trashIcon.style.color = "white";
    trashIcon.addEventListener("click", function(){
        trashIcon.style.color = "red";
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}