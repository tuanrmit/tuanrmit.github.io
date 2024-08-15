document.addEventListener('DOMContentLoaded', function(){
    
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    var ul = document.querySelector("ul");
    var input = document.getElementsByTagName("input")[0];

    // Enter your code here: delete movies
    function deleteListItem(event) {
        var target = event.target;
        if(target.className === "delete") {
            var listItem = target.parentNode;
            listItem.remove();
        }
    }


    // Enter your code here: add movies
    function createListElement() {
        var li = document.createElement("li");
        var movieName = document.createElement("span");
        movieName.appendChild(document.createTextNode(input.value));
        movieName.classList.add("name");
        var deleteBtn = document.createElement("span");
        deleteBtn.appendChild(document.createTextNode("delete"));
        deleteBtn.classList.add("delete");

        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        input.value = "";
    }

    function addItemAfterClick(event) {
        event.preventDefault();
        var target = event.target;
        if(target.tagName === "BUTTON") {
            if(input.value.length > 0) {
                createListElement();
            }
        }
        
    }
    

    ul.addEventListener('click', deleteListItem);
    forms[0].addEventListener('click', addItemAfterClick);
})

function deleteListItem(event) {

}


