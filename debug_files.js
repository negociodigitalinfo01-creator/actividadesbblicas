const fs = require('fs');
const path = require('path');

function findUploads(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findUploads(fullPath);
        } else {
            if (file.includes('depoimento') || file.includes('image')) {
                console.log(fullPath);
            }
        }
    }
}

try {
    // Check common locations if user-uploads is mapped somewhere or just list all files in tmp or root
    console.log("Listing /tmp:");
    const tmpFiles = fs.readdirSync('/tmp');
    console.log(tmpFiles);
} catch (e) {
    console.log(e.message);
}
