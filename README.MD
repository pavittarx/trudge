# mesh-utils
A general purpose javascript utility library, that can be used in and within projects.

## Install 
> npm install mesh-utils

<br/>

---


### Clock Module
It structurizes date and time, to provide easy workflow when working with date & time.

> clock.genStamp(dateString)

It generates a timestamp from given date string.  
```js
const clock = require('mesh-utils').clock;
let stamp = clock.genStamp('01 January 2019, 22:33:44');
console.log(stamp);
```

> clock.genClock(jsTimestamp)
It generates a date & time data structure from given timestamp. 

```js
let clockData = clock.genClock(Date.now());
console.log(clockData);
```
Result 
```js
{ date:
   { year: 2019,
     month: 7,
     day: 10,
     weekDay: 6,
     string: [Function: string] },
  time:
   { hours: 0, 
     minutes: 14, 
     seconds: 21, 
     string: [Function: string] } } 
```

> clock.MonthText(clockData.date.month)

It returns name of the month instead of a number. (January,  February)

> clock.weekDay(clockData.date.weekDay)

It returns name of the week day instead of a number. (Sunday, Monday) 

> clock.abbv()

It abbreviates a textual day or month. 

```js
let weekDay =  clock.weekDay(clockData.date.weekDay);
console.log(clock.abbv(weekDay));
```

<br/>

### File Moldule 
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