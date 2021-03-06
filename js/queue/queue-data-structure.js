class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    // ... your code goes here
  }

  canEnqueue() {
    // ... your code goes here
    if (this.queueControl.length < this.MAX_SIZE) return true;
    return false;
  }

  isEmpty() {
    // ... your code goes here
    if (this.queueControl.length === 0) return true;
    return false;
  }

  enqueue(item) {
    // ... your code goes here
    if (this.canEnqueue()) {
      this.queueControl.splice(0, 0, item);
      return this.queueControl;
    } else {
      return "Queue Overflow";
    }
  }

  dequeue() {
    // ... your code goes here
    if (!this.isEmpty()) {
      return this.queueControl.pop();
    } else {
      return "Queue Underflow";
    }
  }
}
