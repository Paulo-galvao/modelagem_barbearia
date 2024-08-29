const db = [];
const model = require('../models/barbearia.js');

function store(body) {
    lastId++;
    const cadastro = model(body);
    if(cadastro != undefined) {
        db.push(cadastro);
        return 201;
    } else {
        return 400;
    }
}

function showAll() {
    return db;
}

function findId(id) {
    const index = db.findIndex( el = el.id == id );
    if(index != -1) {
        return db[index];
    } else {
        return 400;
    }
}

function update(body, id) {
    const novoCadastro = model(body);
    let index = db.findIndex( el => el.id == id);
    if(index != -1) {
        db[index] = novoCadastro;
        return 201;
    } else {
        return 400;
    }
}

function destroy(id) {
    let index = db.findIndex(el => el.id == id);
    if(index != -1) {
        db.splice(db[index], 1);
        return 201;
    } else {
        return 400;
    }
}

module.exports = {store, showAll, update, destroy};