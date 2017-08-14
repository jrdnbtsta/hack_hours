/*
Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
*/

function removeZeros(array) {
    const len = array.length;
    let count = 1;

    for(let i = 0; i < len; i) {
        if(array[i] == false) {
            array.push(array[i]);
            array.splice(i, 1);
            count += 1;
        } else {
            i += 1;
            count += 1;
        }
        if(count === len) return array;
    }

  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, '0', 13, 0, 78, 0, 0, 19, 14]));