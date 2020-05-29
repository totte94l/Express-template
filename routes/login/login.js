import express from 'express'
/* 
    Login Route
*/

module.exports = function(app) {
    app.get('/login', function(req, res) {
        app.write('Hello World from Login')
    })
}