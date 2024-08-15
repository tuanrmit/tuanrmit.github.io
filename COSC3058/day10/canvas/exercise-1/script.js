console.log("Hello world!");

// Add your js code below here!
let items = document.querySelectorAll('#item-list .item');

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('completed');
    })
})