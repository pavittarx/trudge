const sort = require('./sort');
// Library to perfrom manipulations on Json Data

let json = {
    get: (uri) => {
        return require(url);
    },
    toArray: (json) => {
        return {
            keys: Object.keys(json),
            values: Object.values(json)
        }
    },
    /* Sorts an array of Json objects */
    sort: (json, by) => {
        if (json.length > 21) sort.quickSort(json, 0, json.length-1, by);
        else sort.insertionSort(json, by);
        console.log(json);
    }
}

module.exports = json;

