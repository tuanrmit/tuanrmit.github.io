progLang =['C', 'C++', 'C#', 'Pascal', 'Python', 'PHP', 'Java', 'Javascript', 'Haskell', 'COBOL', 'Assembly', 'Swift', 'Objective-C', "Ruby", "Perl", 'Matlab', 'Basic', "SQL", "HTML", "Scratch"];

document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("languages");

    progLang.forEach(item => {
        var itemDiv = document.createElement("div");
        var content = document.createTextNode(item);
        itemDiv.appendChild(content);
        itemDiv.classList.add("item");
        div.appendChild(itemDiv);
    });
});