function bubble_sort(array) {
    let temp;

    for(let i = 0; i < array.length; i += 1) {
        for(let j = i; j < array.length - i; j += 1){
            if(array[j] < array[j-1]) {
                temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(bubble_sort([2,5,1,10,5,15,33]))