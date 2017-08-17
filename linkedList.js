class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}

class Node{
    constructor(num){
        this.value = num;
        this.next = null;
    }
}

LinkedList.prototype.push = function(num){
    let newNode = new Node(num);

    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }
}

LinkedList.prototype.contains = function(num){
    let current = this.head;
    if(current === null) return false;

    do{
        if(current.value === num) return true;
        current = current.next;
    } while (current.next);

    return current.value === num
}

LinkedList.prototype.addToHead = function(num){
    if(!this.head) this.push(num);

    else {
        let newNode = new Node(num);
        let save = this.head;
        this.head = newNode;
        newNode.next = save;
    }
}

LinkedList.prototype.insert = function(index, num) {
    if(this.head === null && index > 0) return -1;
    if(index === 0) this.addToHead(num);

    let current_place = 0;
    let current_node = this.head;
    let newNode = new Node(num);

    while(current_node.next) {
        if(current_place === index - 1){
            let temp = current_node.next;
            current_node.next = newNode;
            newNode.next = temp;
            return;
        }
        current_place += 1;
    }

    if(current_place === index) return this.push(num);
    else return -1;
}

LinkedList.prototype.removeItem = function(num) {
    if(this.head.value === num) {
        this.head = this.head.next;
    }
    let current = this.head;
    let previous = this.head;
    let count = 0;

    while(current.next) {
        if(current.value === num) {
            previous.next = current.next;
            return;
        }

        if(count > 0) previous = previous.next;
        current = current.next;
    }

    if(current.value === num) {
        this.tail = previous;
        previous.next = null;
    }
}

LinkedList.prototype.removePosition = function(index) {
    if(this.head === null) return -1
    if(index === 0) {
        this.head = this.head.next;
        return;
    }
    let count = 0;
    let previous = this.head;
    let current = this.head;

    while(current.next) {
        if(count === index) {
            previous.next = current.next;
            return;
        }
        if(count > 0) {
            previous = previous.next;
        }
        current = current.next;
        count += 1;
    }

    if(count === index) {
        this.tail = previous;
        pervious.next = null;
        return;
    }
    else return -1;
}


let list = new LinkedList;

list.push(1);
list.push(2);
list.push(4);
list.addToHead(16);
list.insert(1, 15);
console.log(list);
console.log(list.contains(1));