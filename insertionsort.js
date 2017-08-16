function insertion_sort(array) {
    let temp;

    for(let i = 0; i < array.length; i += 1){
        for(let j = i-1; j >= 0; j -= 1) {
            if(array[j] > array[j + 1]) {
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            } else {
                break;
            }
        }
    }
    return array;
}

console.log(insertion_sort([5,1,3,10,55,23,1]))