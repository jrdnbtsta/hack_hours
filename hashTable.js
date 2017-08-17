class Node {
    constructor(key, value){
        this.key = null;
        this.value = null;
        this.next = null;
    }
}

function HashTable() {
  this.SIZE = 16;
  this.storage = new Array(this.SIZE);
}


HashTable.prototype.set = function(key, value) {
    let index = hashCode(key, this.SIZE);
    let newValue = new Node(key, value);

    if(!this.storage[index]) {
        this.storage[index] = newValue;
    } else {
        let current = this.storage[index];

        while(current.next) {
            current = current.next;
        }
        current.next = newValue;
    }
};


HashTable.prototype.get = function(key) {
    let index = hashCode(key, this.SIZE);
    let current = this.storage[index];

    while(current.next) {
        if(current.key === key) return current.value;
        current = current.next;
    }

    return current.key === key ? current.value : 'no matched key';
};


HashTable.prototype.remove = function(key) {
    let index = hashCode(key, this.SIZE);

    if(!this.storage[index]) return 'key does not exist';

    let current = this.storage[index];
    let previous = this.storage[index];
    let count = 0;

    if(current.key === key) {
        this.storage[index] = current.next;
        return;
    };

    while(current.next) {
        if(current.key === key) {
            previous.next = current.next;
            return;
        }
        if(count > 0) previous += 1;
        count += 1;
        current = current.next;
    }
    if(current.key === key) {
        previous.next = null;
    } else {
        return 'key does not exist';
    }
};


// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size){
  var hash = 0;
  if (string.length == 0) return hash;
  for (i = 0; i < string.length; i++) {
    var letter = string.charCodeAt(i);
    hash = ((hash<<5)-hash)+letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}