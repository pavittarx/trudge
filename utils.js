const clock = require('./modules/clock');
const file = require('./modules/file');

module.exports = {
    clock: clock,
    file: file
}



async function init() {

    file.write('This is some sample data', './test/test.md');
    let listFiles = await file.list('./test');
    for (let i in listFiles)
       console.log(await file.read('./test/'+listFiles[i]));
}

init();