/* 
    Users Route
*/

module.exports = function(app) {
    const users = [
        { id: "1", name: "Christoffer Cajander", age: 26, occupation: "Student" },
        { id: "2", name: "Stefan Cajander", age: 52, occupation: "Working" },
        { id: "3", name: "Rebecca Cajander", age: 24, occupation: "Working" },
    ]

    // Get all Users
    app.get('/allUsers', function(req, res) {

        // What we want to send back as a response
        const data = {
            code: 200,
            data: users
        }
        console.log(data)
        res.send(data)
    })

    //Get specific user by ID
    app.get('/user', function(req, res) {
        // Fills with data from Request
        const request = {
            id: req.body.id
        }

        // What we want to send back as a response
        const data = {
            status: 200,
            user: users.find( u => u.id === request.id )
        }

        console.log(`Find user with id ${ request.id }: `, data)
        res.send(data)
    })
}