class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
       this.first;
    }
    enqueue(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length += 1;
       this;
    }
    dequeue() {
      if (this.length > 0) {
        this.first = this.first.next;
        this.length -= 1;
        if (this.length === 0) {
          this.last = null;
        }
      }
    }
  };


    const queue = new Queue(1);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    console.log(queue.peek());