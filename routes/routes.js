// General Routes example

module.exports = function(app) {
    app.get('/general', function(req, res) {
        res.write('General route')
        res.end()
    })
}