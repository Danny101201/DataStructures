class Stack {
  constructor() {
    this.items = []
  }
  push(v) {
    this.items.push(v)
  }
  pop(v) {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length == 0
  }
  size() {
    return this.items.length
  }
  print() {
    console.log(this.items.toString())
  }
}

let STack = new Stack()
console.log(STack.isEmpty())
STack.push(10)
STack.push(20)
STack.push(30)
console.log(STack.pop())
console.log(STack.size())
console.log(STack.peek())

STack.print()