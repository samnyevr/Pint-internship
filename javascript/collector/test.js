class Queue {
  constructor() {
    this.container = JSON.parse(localStorage.getItem(["test"])) || [];
  }

  set enqueue(data) {
    this.container.push(data);
    localStorage.setItem("test", JSON.stringify(this.container));
  }

  get dequeue() {
    const data = this.container.shift();
    localStorage.setItem("test", JSON.stringify(this.container));
    return data;
  }

  get isEmpty() {}

  get peek() {
    return this.container[0];
  }
}

let queue = new Queue();

console.log(queue.peek);
