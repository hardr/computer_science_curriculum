'use strict'

function Node(val, next=null) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// Get the node at an index
SinglyLinkedList.prototype.__getNodeAt = function(index) {
  if (index < 0 || index >= this.length) { return undefined; }
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current;
};

SinglyLinkedList.prototype.push = function(val) {
  let newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  ++this.length;
  return this;
};

SinglyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

SinglyLinkedList.prototype.pop = function() {
  let result;
  if (this.length === 0) {
    return null;
  } else if (this.length === 1) {
    result = this.head.val;
    this.clear();
  } else {
    result = this.tail.val;
    let newTail = this.__getNodeAt(this.length - 2);
    newTail.next = null;
    this.tail = newTail;
    --this.length;
  }
  return result;
};

SinglyLinkedList.prototype.unshift = function(val) {
  let prevHead = this.head;
  let newNode = new Node(val, this.head);
  if (this.length === 0) {
    this.tail = newNode;
  } else if (this.length === 1) {
    this.tail = prevHead;
  }
  this.head = newNode;
  ++this.length;
  return this;
};

SinglyLinkedList.prototype.shift = function() {
};

SinglyLinkedList.prototype.get = function(index) {
};

SinglyLinkedList.prototype.set = function(index, val) {
};

SinglyLinkedList.prototype.remove = function(index) {
};

SinglyLinkedList.prototype.reverse = function () {
};

module.exports = SinglyLinkedList;
