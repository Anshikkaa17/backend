const fs = require('fs');

fs.rm('mydir2', { recursive: true, force: true }, (err) => {
    if (err) {
        console.error("Error deleting directory: ", err);
        return;
    }
    console.log("Directory deleted successfully!");
});
