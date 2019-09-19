## trudge

[Project Source](https://github.com/pavittarx/trudge) | [View Docs](https://github.com/pavittarx/trudge/tree/docs)

## Clock Module
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

---- 