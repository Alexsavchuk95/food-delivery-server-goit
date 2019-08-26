const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, '../../','db','products','all-products.json');
fs.readFile(filePath,'utf8',function (err,data){
    if (err) throw err;
    const getProducts = JSON.parse(data);
    console.log(typeof data);
});


