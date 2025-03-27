const fs = require('fs');
const data = 'I am new Data';
fs.writeFile("./mydir2/data.text",data,(err) =>{
    if(err) throw err;
    console.log("file created sucessfully");

}
);

