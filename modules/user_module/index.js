// const authentication=require("../../middleware/user_auth");
const upload = require('../../middleware/user_profile');
const {valiDate,validator}=require("../../middleware/validator")
const {user,Login,forPass,Varifotp}=require("../../comman/require")

const { Update , register, forgotpass, login,varifyotp, getUserById,resetpass} = require('./user.controller');

module.exports = (router)=>{
router.post('/user/register',valiDate(user),validator, register);
router.post('/user/login',valiDate(Login),login);

router.post("/user/forgot-password",valiDate(forPass),forgotpass);
router.post("/user/varify-otp",valiDate(Varifotp),varifyotp)
router.post("/user/reset-password",resetpass);

router.get("/user/profile", getUserById)
router.put('/user/update', Update);
}