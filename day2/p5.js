const fs = require('fs');
fs.mkdir('mydir2',(err) =>{
    if(err)
        console.log('Error creating directory:',err);
    else
    console.log('directory created');
}
);