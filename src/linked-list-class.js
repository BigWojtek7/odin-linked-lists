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
    this.size += 1;
  }

  prepend(value) {
    const node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = node;
      current.nextNode = this.head;
      this.head = current;
    }
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return Object.values(this.head)[0];
  }

  getTail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  atIndex(index) {
    let current = this.head;
    let count = 0;
    while (current.nextNode) {
      current = current.nextNode;

      if (count === index) {
        return current.value;
      }
      count += 1;
    }
    return "index out of range";
  }

  pop() {
    let current = this.head;
    let prev = null;
    while (current.nextNode) {
      if (current.nextNode !== null) prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    while (current.nextNode) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;
    while (current.nextNode) {
      if (current.value === value) return count;
      current = current.nextNode;
      count += 1;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return `${str}${null}`;
  }
}

export default LinkedList;
