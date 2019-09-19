let json = {
    // returns type of underlying JSON Data [Array/Object]
    type: (_json) => {
        if (_json.constructor === Array) return 'array';
        else return 'object';
    },

    isEmpty: (_json) => {
        if (_json.constructor === Array && _json.length === 0) return true;
        if (_json.constructor === Object && (Object.entries(_json)).length === 0) return true;
        return false;
    },

    get: async (uri) => {
        let _fs = require('./file');
        
        // checks if the file is currently being written to, or used by other process
        let finished = await _fs.isFinishedModifying(uri);
        
        if(finished) console.log(require(uri));
    },

    set: function set(uri, _json) {
        // writes a JSON Data to filesystem
        if (this.isEmpty(_json)) {
            let err = new Error('The JSON Object is empty');
            throw err;
        }else{
            let _fs = require('./file');
            _fs.write(JSON.stringify(_json), uri);
        }

    },

    toArray: (json) => {
        return {
            keys: Object.keys(json),
            values: Object.values(json)
        }
    },

    /* Sorts an array of Json objects */
    sort: (json, by) => {
        if (json.length > 21) quickSort(json, 0, json.length - 1, by);
        else insertionSort(json, by);
        console.log(json);
    },

    push: function push(_json, data, options) {

        if (options === undefined) {
            _json.push(data);
        }

        if (typeof options === 'string') {
            if (options == 'front') this.push(_json, data, 0);
        }

        if (typeof options === 'number') {
            _json.splice(options, 0, data);
        }
    },

    pop: function pop(_json, from, amount = 1) {
        if (from === undefined) {
            _json.pop();
        }

        if (typeof from === 'string') {
            if (from == 'front') this.pop(_json, 0, amount);
        }

        if (typeof from === 'number') {
            _json.splice(from, amount);
        }
    },

    search: function search(_json, key, value) {
        let len = _json.length;
        if (len < 5) {
            for (let i = 0; i < len; ++i) {
                if (_json[i][key] === value) return _json[i];
                if (i == len - 1) return null;
            }
        }

        let val1 = search(_json.slice(0, len / 2), key, value);
        let val2 = search(_json.slice(len / 2, len), key, value);

        if (val1 != null) return val1;
        if (val2 != null) return val2;

        return null;
    }

}

module.exports = json;


// Sorting Methods QuickSort & InsertionSort

function insertionSort(json, by) {
    let length = json.length,
        key;
    for (let i = 1; i < length; i++) {
        key = json[i][by];
        let j = i - 1;
        while (j >= 0 && json[j][by] > key) {
            json[j + 1][by] = json[j][by];
            j = j - 1;
        }
        json[j + 1][by] = key;
    }
}


// Quicksort Algorithm Implemented
function quickSort(json, low, high, by) {
    if (low < high) {
        let pi = partition(json, low, high, by);
        quickSort(json, low, pi - 1, by);
        quickSort(json, pi + 1, high, by);
    }
}

function partition(json, low, high, by) {
    let pivot = json[high][by];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (json[j][by] <= pivot) {
            i++;
            swap(json, j, i, by);
        }
    }
    swap(json, i + 1, high, by);
    return i + 1;
}

// swaps values of an array 
// [Note] Javascripts on passes objects & arrays as reference, not individual elements. 
function swap(json, i, j, by) {
    let temp = json[i];
    json[i] = json[j];
    json[j] = temp;
}