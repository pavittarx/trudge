// Insertion Sort
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
    console.log('quickSort()');
    if (low < high) {
        let pi = partition(json, low, high, by);
        quickSort(json, low, pi-1, by);
        quickSort(json, pi+1, high, by);
    }
}

function partition(json, low, high, by) {
    console.log(partition);
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
    let temp = json[i][by];
    json[i][by] = json[j][by];
    json[j][by] = temp;
}


module.exports = {
    insertionSort, quickSort
}