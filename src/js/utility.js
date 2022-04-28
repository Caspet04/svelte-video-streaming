/**
 * Takes in an array and returns a random element from it.
 * Note: The element is not copied from the array.
 * @param {Array<T>} arr 
 * @returns {T} element from arr
 */
export function randomItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

export function multirun(func, useValue, callIfValueUsed = null, max = -1, verbose = false) {
    if (verbose) { console.log("Starting multirun function") }
    
    let i = 0;
    let res = null;
    while (i < max || max < 0) {
        res = func();
        if (verbose) { console.log("Function called") }
        
        if (useValue(res)) {
            if (callIfValueUsed != null) {
                if (verbose) { console.log("Called callIfValueUsed") }
                callIfValueUsed(res);
            }

            if (verbose) { console.log("Return value") }
            return res;
        }

        i++;
    }
    
    if (verbose) { console.log("Max tries reached, returning last return value") }
    return res;
}