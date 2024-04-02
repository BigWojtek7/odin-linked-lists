import LinkedList from "./linked-list-class.js";
// import Node from "./node-class.js";

const list = new LinkedList();
list.append(5555);
list.append(4320);
list.append(7777);
list.append(2323);
list.prepend("first");
console.dir(list, { depth: null });

console.dir(list.toString());

