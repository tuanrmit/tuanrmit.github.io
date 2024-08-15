const express = require("express"); // require express module which is the Express framework
const app = express();              // declare an Express object and name it app
const morgan = require("morgan");   // 5. Middleware about logging HTTP request information

// 8. add ejs templating engine
app.set("view engine", "ejs");  // tell Express which view engine to use

// 1. Serve static files from public directory
app.use(express.static("public"));
// 6. Middleware to parse URL-encoded data in the request body to the req.body object
app.use(express.urlencoded({extended: false}));

// 4. Middleware function (or middleware) to preprocess request and response
const logRequest = function(req, res, next) {
    console.log(`Request: ${req.method} for ${req.path}`);
    next();
};

app.use(logRequest);
app.use(morgan("dev"));
app.param("username", function(req, res, next, username) {

    // Check if  username is recognized
    if (username === "jblack") {
        req.user = { name: "Jack Black", username: username };
    }
    else {
        req.user = { name: "Unknown", username: username};
    }
    // Continue processing the request, namely, the request is handled by corresponding route below - the route being requested
    next();
});

// 9.Route with ejs view
app.get("/welcome", function(req, res){
    let title = "Home";
    let message = "Welcome, to my first Express Server!";
    res.render("welcome", {title, message});
});

app.get("/about", function(req, res) {
    res.render("about");
});
// 3. Route browser requests
app.get("/hello", function(req, res) {
    res.send("<h1>Hello, Express</h1>");
});

app.post("/goodbye", function(req, res) {
    res.send("<h1>Goodbye, Express!</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>Hello, About</h1>");
});

//6. Route with query
app.get("/greeting", function(req, res) {
    const html = `<h1>Greeting, ${req.query.name}!</h1>
                  <p>You are ${req.query.age} years old.</p>`
    res.send(html);
});

app.post("/hello", function(req, res) {
    const html = `<h1>Hello, ${req.body.name}</h1>
                  <p>You are ${req.body.age}</p>`;
    res.send(html);
});

//7. Route with parameter /route/:param
app.get("/info/:username", function(req, res) {
    const username = req.params.username;
    res.send(`<h1>Profile for ${username}`);
});

app.get("/users/:username", function(req, res) {

    // req.user contains the user info set in the parameter middleware
    res.send("<h1>Profile for " + req.user.name + "</h1>");
 });
// 2. Start the web server
app.listen(3000, function() {
    console.log("Listening on port 3000...");
});