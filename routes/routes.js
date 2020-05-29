/* 
    General Routes
*/

module.exports = function(app) {
    app.get('/marky', function(req, res) {
        res.write('New route')
        res.end()
    })
}