class Stack{
    constructor(){
        this.storage = {};
        this.len = 0;
    }
}

Stack.prototype.push = function(num){
    this.storage[this.len] = num;
    this.len += 1;
}

Stack.prototype.pop = function(){
    let value = this.storage[this.len-1];
    delete this.storage[this.len];
    return value;
}

let test = new Stack;
test.push(1);
console.log(test.pop());