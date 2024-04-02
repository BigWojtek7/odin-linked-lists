import Node from "./node-class.js";

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
    this.size += 1
  }

  prepend(value){
    const node = new Node(value);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = node;
      current.nextNode = this.head
      this.head = current;
    }
    this.size += 1
  }

  getSize(){
    return this.size
  }

  getHead(){
    return Object.values(this.head)[0]
  }
}

export default LinkedList;
