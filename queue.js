class Queue{
    constructor(){
        this.storage = {};
        this.len = 0;
    }
}

Queue.prototype.enqueue = function(num){
    this.storage[this.len] = num;
    this.len += 1;
}

Queue.prototype.dequeue = function(num){
    let value = this.storage[0];

    for(let i = 1; i < Object.keys(this.storage).length; i += 1) {
        this.storage[i-1] = this.storage[i];
    }
    delete this.storage[this.len-1];
    this.len -= 1;
    return value;
}

let test = new Queue;
test.enqueue(1);
test.enqueue(2);
console.log(test.storage);

test.dequeue();
console.log(test.storage);