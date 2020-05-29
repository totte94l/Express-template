/* 
    Login Route
*/

module.exports = function(app) {
    app.get('/login', function(req, res) {
        res.write('Login')
        res.end()
    })
}