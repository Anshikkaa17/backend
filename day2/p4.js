const fs = require('fs');
fs.unlink("./mydir2/data.text",(err) =>{
    if(err)
        console.log(err)
    else
    console.log("File deleted");
}
);