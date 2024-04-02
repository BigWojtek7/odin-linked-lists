import Node from "./node-class.js";

class LinkedList {
  constructor(head = null) {
    this.head = head;
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
  }

  // prepend(value){
  //   ...
  // }
}

export default LinkedList;
