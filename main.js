class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value) {
        let node = new Node(value)
        if (this.size === 0) {
            this.head = node
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++
    }
    prepend(value) {
        let node = new Node(value)
        if (this.size === 0) {
            this.tail = node;
        } else {
            node.next = this.head
        }
        this.head = node
        this.size++
    }
    sizeList() {
        return this.size
    }
    headList() {
        return this.head
    }
    tailList() {
        return this.tail
    }
    at(index) {
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current;
    }
    pop () {
        let current = this.head
        while (current.next.next !== null) {
            current = current.next
        }
        current.next = null
        this.tail = current
        this.size--;
    }
    contains(value) {
        let current = this.head
        while (current.value !== value ) {
            current = current.next
        } return true;
    }
    find(value) {
        let current = this.head
        let index = 0;
        while (current.value !== value) {
            current = current.next
            index++;
        } return console.log(index,value)
    }
    toString() {
        let current = this.head
        while (current.next !== null) {
            console.log(current)
            current = current.next
        } console.log(current)
    }
}


let ll1 = new LinkedList()
// ll1.prepend(100)
// ll1.prepend(200)
// ll1.prepend(300)
// ll1.prepend(400)
ll1.append(100)
ll1.append(200)
ll1.append(300)
ll1.append(400)
console.log(ll1.sizeList())
console.log(ll1.headList())
console.log(ll1.tailList())
console.log(ll1.at(1))
ll1.pop()
console.log(ll1.contains(200))
ll1.find(100)
ll1.toString()



console.log(ll1)



