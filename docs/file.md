## trudge

[Project Source](https://github.com/pavittarx/trudge) | [View Docs](https://github.com/pavittarx/trudge/tree/docs)

## File Moldule 
This module helps you read, write & list files in a directory. 

```js
const file = require('mesh-utils').file;
```

> file.read(url)

It reads a file, and returns a promise. The promise resolves into file contents, or an error object.

> file.list(dir_url) 

It lists the contents of a directory. 

Return Type: Promise 

Resolves Into: Array containing contents of directory, or error object. 

> file.write(data, location)

It writes provided data at the given location. 
* The location parameter must also contain filename. 
* A new file is created or existing file is rewritten. 

```js
  file.write('This is some sample data', './test/test.md');

  let listFiles = await file.list('./test');
    
  for (let i in listFiles)
    console.log(await file.read('./test/'+listFiles[i]));
```
