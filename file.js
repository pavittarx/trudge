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
    stream.on('error', (error) => {
        return new Promise(resolve => {
            resolve({
                err: true,
                error
            });
        })
    });
}

function deleteFile(uri) {
    fs.unlink(uri, error => {
        return new Promise(resolve => {
            resolve({
                err: true,
                error: error
            })
        });
    });

}

function appendFile(data, location) {
    fs.appendFile(location, data, (error) => {
        return new Promise(resolve => {
            resolve({
                err: true,
                error: error
            })
        })
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

async function deleteAllFiles(uri) {
    let data = await getFilesList(uri);
    console.log(data);
    if (!data.err) {
        for (let i in data) {
            deleteFile(uri + '/' + data[i]);
        }
    } else console.log(data.error)
}

module.exports = {
    read: readFile,
    write: writeFile,
    delete: deleteFile,
    append: appendFile,
    deleteAll: deleteAllFiles,
    list: getFilesList,
    getStats,
    isFinishedModifying
}

// gives the stats of a given file
async function getStats(uri) {
    return new Promise((resolve) => {
        fs.stat(uri, (error, stats) => {
            if (!error) resolve(stats);
            else resolve({
                err: true,
                error: error
            })
        })
    });

}

// returns true when file has finished writing or modifying
async function isFinishedModifying(fileUri) {
    return new Promise((resolve, reject) => {
        let interval = setInterval(() => {
            fs.open(fileUri, 'r+', (err, fd) => {
                if (err && err.code === 'EBUSY') {
                    // just wait for next iteration
                } else if (err && err.code === 'ENOENT') {
                    resolve({
                        err: true,
                        error: 'file.js : 127 -> File does Not Exist'
                    });
                    clearInterval(interval);
                } else {
                    fs.close(fd, (err) => {
                        if (err){
                            resolve({
                                err: true,
                                error: err
                            })
                            clearInterval(interval);
                        } else{
                            resolve(true);
                            clearInterval(interval);
                        }
                    })
                }
            });
        }, 500);
    })
}