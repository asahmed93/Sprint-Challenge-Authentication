const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findBy
};

async function add(user) {
    await db('users').insert(user)

    return findBy(user)
}

function find(id) {
    let user = db('users')
    if(id) {
        return user.where({ id }).first()
    } else {
        return user
    }
}

function findBy(filter) {
    return db('users').where(filter).first()
}
