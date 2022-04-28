/**
 * Takes in an array and returns a random element from it.
 * Note: The element is not copied from the array.
 * @param {Array<T>} arr 
 * @returns {T} element from arr
 */
export function randomItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}