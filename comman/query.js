
const knex= require("../database/db")


const findAll = async (tableName) => {
    const data= await knex.select('*').from(tableName)
    return data
}

const insert = async (tableName, userData) => {
    const data= await knex(tableName).insert(userData)
    return data
}

const getbyId = async (tableName, condition) => {
    const data= await knex.select('*').from(tableName).where(condition)
    return data
     
}

const update = async (tableName, userData,id) => {
    const data= await knex.update(userData).from(tableName).where(id)
    return data

}


const Delete = async (tableName,id) => {
    const data= await knex(tableName).where(id).delete()
    return data

}

module.exports = { findAll, getbyId, insert, update, Delete}