class Set{
    constructor(){
        this.storage = {};
        this.len = 0;
    }
}

Set.prototype.add = function(num){
    if(!this.storage[num]) this.storage[num] = 1;
    else this.storage[num] += 1;
}

Set.prototype.contains = function(num){
    return !!this.storage[num];
}

Set.prototype.remove = function(num){
    delete this.storage[num];
}

let test = new Set;

test.add(1);
test.add(1);
test.add(3);
console.log(test.storage);
console.log(test.contains(1));
test.remove(3);
console.log(test.storage);