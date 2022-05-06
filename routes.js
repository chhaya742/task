const fs = require("fs")
const path = require('path');

const directoryPath = path.join(__dirname, 'modules');
const files = (router) =>{
  
        fs.readdirSync(directoryPath ).filter(function (file) {
          require(path.join(directoryPath , file))(router);
        });

}

module.exports = files;





