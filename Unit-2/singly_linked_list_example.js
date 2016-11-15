function Node(val) {
  this.val = val;
  this.next = null;
  this.index = 0;
}

var myHouse = new Node('home');
var yourHouse = new Node('my house too');
var noHouse = new Node('no house')

function SinglyLinkedList(head) {
  this.head = head;
  this.tail = null;
  this.length = 1;
  this.index = 0;
}

var singleList = new SinglyLinkedList(myHouse);

SinglyLinkedList.prototype.add = function (node) {
  node.index = this.length;
  var loc = this.head;
  while (loc.next) {
    loc = loc.next;
  };
  loc.next = node;
  this.length++;
  this.tail = node;
}

SinglyLinkedList.prototype.removeLast = function() {
  var last = this.head;
  while (last.next !== this.tail) {
    last = last.next;
  }
  last.next = null;
  this.length--;
  this.tail = last;
}

SinglyLinkedList.prototype.__getAtIndex = function(index) {
  var indexOf = this.head;
  while(index !== indexOf.index) {
    indexOf = indexOf.next;
  }
  return indexOf;
};

singleList.add(yourHouse);
singleList.add(noHouse);
singleList.add(myHouse);
singleList.removeLast();

console.log(singleList.__getAtIndex(2));
