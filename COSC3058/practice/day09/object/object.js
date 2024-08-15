let rmitColors = {
    red: '#E61E2A',
    yellow: '#FAC800',
    blue: '#00054'
}

document.write(`rmitColor["red"] = ${rmitColors['red']}`);
document.write("<br>");
document.write(`rmitColor.red = ${rmitColors.red}`);

let shoppingCart = [
    {
        product: 'chocolate',
        price: 6.5,
        quantity: 1
    },
    {
        product: 'chicken soup',
        price: 12.45,
        quantity: 2
    },
    {
        product: 'tissue',
        price: 2,
        quantity: 1
    },    
];

document.write("<ol>")
shoppingCart.forEach(item => {
    document.write(`<li>Product: ${item.product}, Price: ${item.price}, Quantity: ${item.quantity}</li>`);
})
document.write("</ol>")

let student = {
    firstName: 'Tom',
    lastName: 'Huynh',
    hobbies: ['Music', 'Video Games'],
    exams: {
        midterm: 93,
        final: 85
    }
}

document.write(`<h1>Student ${student.firstName} ${student.lastName}</h1>`);
document.write("<p>Hobbies: </p>");
document. write("<ul>");
for(let hobby of student.hobbies) {
    document.write(`<li>${hobby}</li>`)
}
document. write("</ul>");
document.write("<h2>Exam Scores:</h2>");

document.write("<ol>");
for(let key in student.exams) {
    document.write(`<li>${key}: ${student.exams[key]}</li>`)
}
document.write("</ol>");