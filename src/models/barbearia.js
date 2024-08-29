const franquia_controller = require('../controllers/franquia.js');

let lastId;
if(db.length == 0) {
    lastId = 0;
} else {
    lastId = db[db.length - 1];
}

function model(body) {
    let id = lastId;
    if(franquia_controller.show(body.franquia.id) && body.nome != undefined && body.nome != "") {
        return {
            id,
            nome: body.nome,
            endereco: body.endereco,
            franquia_id: body.franquia_id
        }
    } else {
        return undefined;
    }
}



module.exports = model;