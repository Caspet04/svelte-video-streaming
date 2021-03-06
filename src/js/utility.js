// TODO: Refactor and create comments

/**
 * Takes in an array and returns a random element from it.
 * Note: The element is not copied from the array.
 * @param {Array<T>} arr
 * @returns {T} element from arr
 */
export function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function multirun(
    func,
    useValue,
    callIfValueUsed = null,
    max = -1,
    verbose = false
) {
    if (verbose) {
        console.log("Starting multirun function");
    }

    let i = 0;
    let res = null;
    while (i < max || max < 0) {
        res = func();
        if (verbose) {
            console.log("Function called");
        }

        if (useValue(res)) {
            if (callIfValueUsed != null) {
                if (verbose) {
                    console.log("Called callIfValueUsed");
                }
                callIfValueUsed(res);
            }

            if (verbose) {
                console.log("Return value");
            }
            return res;
        }

        i++;
    }

    if (verbose) {
        console.log("Max tries reached, returning last return value");
    }
    return res;
}

export function truncate(str, length) {
    if (str.length < length) {
        return str;
    }
    const substr = str.substr(0, length - 1);
    return str.substr(0, substr.lastIndexOf(" ")) + "&hellip;";
}

export function repeatString(
    str,
    numberOfTimes,
    spacer = "",
    addLastSpace = false
) {
    let temp = "";
    for (let i = 0; i < numberOfTimes; i++) {
        temp += str;
        if (addLastSpace || i != numberOfTimes - 1) {
            temp += spacer;
        }
    }
    return temp;
}
