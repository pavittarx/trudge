## File Moldule 
This module helps you read, write & list files in a directory. 

```js
const _fs = require('trudge').file;
```

### _fs.read(local_url)

It reads a file from the file system. 
* Return Type: Promise, resolves with file contents.
* Function Type: Asynchronous

```js 
async function read(){
  let data = await _fs.read('./test.md');
  console.log(data);
}
```
### _fs.write(data, location) 
It writes data at any given location in the filesystem. 
* Return Type: None

```js
 _fs.write("Some Sample Text", "./test.md");
```
*Use _fs.isFinishedWiriting() to check if the file is being used by another process.*

### _fs.list(directory_url) 
It lists the contents of a directory. 
* Return Type: Promise, resolves into contents of the directory. 

```js
  _fs.list('./'); 
```
*The functions does not differentiate between file & directories. Use _fs.getStats() to get the file/directory information.*


If you like it, please consider giving this project a star on Github.

[View Source](https://github.com/pavittarx/trudge)  

Developed by [pavittarx](https://github.com/pavittarx)
