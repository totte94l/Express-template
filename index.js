const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Gets the routes from here.
// You can add new routes in this folder and import it the same way as below.
var routes = require('./routes/routes')(app)

// Example: Login Route
// localhost:3000/login
var login = require('./routes/users/users')(app)

// localhost:3000/
app.get('/', function(req, res) {
    res.write("Hello World from root")
    res.end();
})

// Server
app.listen(port, () => console.log(`Server running - localhost:${port}`))