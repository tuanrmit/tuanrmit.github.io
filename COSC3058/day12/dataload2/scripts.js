progLang =['C', 'C++', 'C#', 'Pascal', 'Python', 'PHP', 'Java', 'Javascript', 'Haskell', 'COBOL', 'Assembly', 'Swift', 'Objective-C', "Ruby", "Perl", 'Matlab', 'Basic', "SQL", "HTML", "Scratch"];

document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("languages");

    progLang.forEach(item => {
        var itemDiv = document.createElement("div");
        itemDiv.appendChild(document.createTextNode(item));
        itemDiv.classList.add("item");
        div.appendChild(itemDiv);
    })

});
