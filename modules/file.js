const fs = require('fs');

// reads a file from given location
function readFile(uri) {
    const stream = fs.createReadStream(uri, {
        encoding: 'utf8'
    });
    let data = ' ';
    stream.on('data', (chunk) => {
        data += chunk;
    })

    // resolves with data or an error object, no scope for rejection
    return new Promise((resolve, reject) => {
        stream.on('end', () => {
            resolve(data);
        })

        stream.on('error', (error) => {
            resolve({
                err: true,
                error: error
            })
        })

    })
}

// writes data at given location
function writeFile(data, location) {
    let stream = fs.createWriteStream(location);
    stream.write(data);
    
    return Promise((res, rej)=>{
        stream.on('error', (error)=>{
            stream.end();
            resolve({ err :  true, error})
        });
    })
}

// lists files in a given directory
function getFilesList(dir) {
    return new Promise((resolve) => {
        fs.readdir(dir, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                resolve({
                    err: true,
                    error: err
                })
            }
        })
    })
}

module.exports = {
    read: readFile,
    write: writeFile,
    list: getFilesList
}