"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linked_list_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list-class.js */ "./src/linked-list-class.js");
/* harmony import */ var _node_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-class.js */ "./src/node-class.js");





const list = new _linked_list_class_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
list.append(5555);
list.append(4320);
list.append(7777);
list.append(2323);
console.log(list);


/***/ }),

/***/ "./src/linked-list-class.js":
/*!**********************************!*\
  !*** ./src/linked-list-class.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _node_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-class.js */ "./src/node-class.js");


class LinkedList{
  constructor(head = null) {
    this.head = head;
  }

  append(value){
    let node = new _node_class_js__WEBPACK_IMPORTED_MODULE_0__.Node(value)

    let current;

    if (this.head === null){
      this.head = node;
    } else {
      current = this.head

      while(current.nextNode){
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }

  // prepend(value){
  //   ...
  // }
}



/***/ }),

/***/ "./src/node-class.js":
/*!***************************!*\
  !*** ./src/node-class.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNiOzs7O0FBSXZDLGlCQUFpQiw2REFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVnVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixnREFBSTs7QUFFdkI7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saW5rZWQtbGlzdC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ub2RlLWNsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tIFwiLi9saW5rZWQtbGlzdC1jbGFzcy5qc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGUtY2xhc3MuanNcIjtcblxuXG5cbmNvbnN0IGxpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xubGlzdC5hcHBlbmQoNTU1NSk7XG5saXN0LmFwcGVuZCg0MzIwKTtcbmxpc3QuYXBwZW5kKDc3NzcpO1xubGlzdC5hcHBlbmQoMjMyMyk7XG5jb25zb2xlLmxvZyhsaXN0KTtcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLWNsYXNzLmpzXCI7XG5cbmNsYXNzIExpbmtlZExpc3R7XG4gIGNvbnN0cnVjdG9yKGhlYWQgPSBudWxsKSB7XG4gICAgdGhpcy5oZWFkID0gaGVhZDtcbiAgfVxuXG4gIGFwcGVuZCh2YWx1ZSl7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSlcblxuICAgIGxldCBjdXJyZW50O1xuXG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCl7XG4gICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gdGhpcy5oZWFkXG5cbiAgICAgIHdoaWxlKGN1cnJlbnQubmV4dE5vZGUpe1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0Tm9kZTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudC5uZXh0Tm9kZSA9IG5vZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJlcGVuZCh2YWx1ZSl7XG4gIC8vICAgLi4uXG4gIC8vIH1cbn1cblxuZXhwb3J0IHtMaW5rZWRMaXN0fSIsImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwsIG5leHROb2RlID0gbnVsbCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gIH1cbn1cblxuZXhwb3J0IHsgTm9kZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9