const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

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