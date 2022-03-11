module.exports = function (aplication) {
    aplication.get('/', function (req, res) {
        aplication.src.controllers.login.index(aplication, req, res);
    })
}