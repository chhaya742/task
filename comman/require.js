const yup = require('yup');
const phoneRegExp =/^[6-9]{1}[0-9]{9}$/;
const passwordRegExp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const user = yup.object().shape({
    fullname: yup.string().required().min(8, 'Must be at least 8 characters')
    .max(20, 'Must be less  than 20 characters'),
    phone_no: yup.string()
    .required("This field is Required")
    .matches(phoneRegExp,"Phone number is not valid" ),
    email: yup.string().email("Invalid email format").required(),
    password: yup.string().required().matches(passwordRegExp,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    confirm_password: yup.string().required(),
    address: yup.string().required(),
    country:yup.string().required(),
    state:yup.string().required(),
    city: yup.string().required(),
    pincode: yup.number().required().positive().integer(),
});
const Login=yup.object().shape({
    email:yup.string().email("Invalid email format").required(),
    password: yup.string().required()

});
const forPass=yup.object().shape({
    email:yup.string().email("Invalid email format").required()
});
const Varifotp=yup.object().shape({
    otp:yup.string().required()
});
const resetPass=yup.object().shape({
    email:yup.string().email("Invalid email format").required()
});
module.exports={user,Login,forPass,Varifotp,resetPass}