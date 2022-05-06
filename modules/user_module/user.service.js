const bcrypt = require("bcrypt");
const messages = require("../../comman/messages");
const statusCode = require("../../comman/statusCode");
const salt = bcrypt.genSaltSync(10);

// const { isData } = require("../../comman/requireField");
const { isOtpMatch } = require("../../middleware/validator");

const { getbyId, insert, update, Delete } = require("../../comman/query");
const { Resp, response } = require("../../comman/response");

const registerUser = async (body) => {
    const userData = {
        fullname: body.fullname,
        phone_no: body.phone_no,
        email: body.email,
        password: bcrypt.hashSync(body.password, salt),
        confirm_password: body.confirm_password,
        address: body.address,
        country: body.country,
        state: body.state,
        city: body.city,
        pincode: body.pincode
    }
    return insert('user', userData);
}

const userLogin = async (email, password) => {
    var data = await getbyId('user', { 'email': email })
    if (data.length!=0) {
        if(bcrypt.compareSync(password, data[0].password)){
            for (i in data[0]) {
                if (i == 'createdAt' || i == 'updatedAt' || i == 'confirm_password'||i=='otp') {
                    delete data[0][i];
                }
            }
            return data,response(true, statusCode.Created, messages.login,data)
        }
        else{
            return response(false, 400, message.incPass, null)
        }
    }
    else {
        return response(false, 400, messages.notExist, null)
        
        
    }

}

const getUser = async (id) => {
    const data = await getbyId('user', { 'user_id': id });
    for (i in data[0]) {
        if (i == 'createdAt' || i == 'updatedAt' || i == 'confirm_password'||i=='otp') {
            delete data[0][i];
        }
    }
    return data
}


const updateUser = async (id, body, FilePath) => {
    const userData = {
        profile_pic: FilePath,
        fullname: body.name,
        phone_no: body.phone_no,
        email: body.email,
        password: bcrypt.hashSync(body.password, salt),
        confirm_password: body.confirm_password,
        address: body.address,
        country: body.country,
        state: body.state,
        city: body.city,
        pincode: body.pincode
    }
    const data = await update(schema.user, userData, { 'user_id': id })
    return usersRows = JSON.parse(JSON.stringify(data))[0]

}

const forgotPass = async (email) => {
    var data = await getbyId('user', { 'email': email })
    usersRows = JSON.parse(JSON.stringify(data))[0]
    return isOtpMatch(usersRows, email)



}

const varifyOtp = async (email, otp) => {
    const data = await getbyId('user', { 'email': email })
    return isOtpMatch( data, email, otp)

}


const resetPass = async (password, email) => {
    return await update('user', { 'password': bcrypt.hashSync(password, salt) }, { 'email': email })
}

module.exports = { getUser, updateUser, registerUser, forgotPass, userLogin, varifyOtp, resetPass }