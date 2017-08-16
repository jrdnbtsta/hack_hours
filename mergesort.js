function merge_sort(array){
    //base case
    if(array.length ===1) return array;

    let left = merge_sort(array.slice(0, array.length/2));
    let right = merge_sort(array.slice(array.length/2));
    let sorted = [];

    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }

    return left.length > 0 ? sorted.concat(left) : sorted.concat(right);
}


console.log(merge_sort([4,1,2,5,6,1,5,1,43,51,23,1,3,5,]))