const path = require('path')
const upload = (req, res, next) => {

    if (!req.files) {
        res.send("image field can't be blank")
    }
    const filess = req.files.profile_pic;
    const uploadPath = path.join(__dirname, "..", '/storage/userprofile', filess.name);
    const fileName = '/userprofile/'+ filess.name; 
    res.filepath = fileName 
    filess.mv(uploadPath, function (err) {    

        if (err)
            return res.status(500).send(err);
        next()
    })
}


module.exports = upload;