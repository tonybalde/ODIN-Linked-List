class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Insert a node at a specific position
  insert(position, data) {
    if (position < 0 || position > this.length) {
      throw new Error("Invalid position");
    }

    if (position === 0) {
      this.prepend(data);
    } else if (position === this.length) {
      this.append(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = newNode;
      newNode.next = current;
      this.length++;
    }
  }

  // Remove a node at a specific position
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      throw new Error("Invalid position");
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (position === 0) {
      this.head = current.next;

      if (this.length === 1) {
        this.tail = null;
      }
    } else if (position === this.length - 1) {
      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      this.tail = previous;
      previous.next = null;
    } else {
      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }

    this.length--;
  }

  // Get the node at a specific index
  at(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  // Check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the length of the list
  size() {
    return this.length;
  }

  // Prints the Head
  head() {
    return this.head;
  }

  // prints the last node
  tail() {
    return this.tail;
  }

  // Remove the last element from the list
  pop() {
    if (!this.head) {
      throw new Error("The list is empty");
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let previous = null;

      while (current.next !== null) {
        previous = current;
        current = current.next;
      }

      previous.next = null;
      this.tail = previous;
    }

    this.length--;
  }

  // Check if the list contains a specific value
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // Find the index of a node containing a specific value
  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return null;
  }

  // Represent the LinkedList as a string
  toString() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(`(${current.data})`);
      current = current.next;
    }

    values.push("null");

    return values.join(" -> ");
  }

  // Print the list values
  print() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.data);
      current = current.next;
    }

    console.log(values.join(" -> "));
  }
}


/// HERE SOME EXAMPLES 

const list = new LinkedList();

// append() example
list.append(10);
list.append(20);
list.append(30);
console.log(list.toString()); // (10) -> (20) -> (30) -> null

// prepend() example
list.prepend(5);
console.log(list.toString()); // (5) -> (10) -> (20) -> (30) -> null

// insert() example
list.insert(2, 15);
console.log(list.toString()); // (5) -> (10) -> (15) -> (20) -> (30) -> null

// removeAt() example
list.removeAt(3);
console.log(list.toString()); // (5) -> (10) -> (15) -> (30) -> null

// at() example
console.log(list.at(2)); // 15

// isEmpty() example
console.log(list.isEmpty()); // false

// size() example
console.log(list.size()); // 4

// contains() example
console.log(list.contains(20)); // false
console.log(list.contains(10)); // true

// find() example
console.log(list.find(15)); // 2
console.log(list.find(25)); // null

// pop() example
list.pop();
console.log(list.toString()); // (5) -> (10) -> (15) -> null

// toString() example
console.log(list.toString()); // (5) -> (10) -> (15) -> null


