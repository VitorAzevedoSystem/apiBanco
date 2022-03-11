var fs = require('fs');

function login() { }

login.prototype.getLogin = function (callback) {
    fs.readFile('./data/dados.json', 'utf8', function (err, result) {
        var data = [];

        if (!err) {

            var obj = JSON.parse(result);
            var i = 0; //(obj.pessoas.length - 1);

            obj.dados.forEach(function (dados) {
                if (i >= 0) {
                    data[i] = dados;
                    i++;
                }
            });
        }
        callback(err, data);
    });
};

module.exports = function () {
    return login;
}