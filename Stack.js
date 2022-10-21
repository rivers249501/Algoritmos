class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    // Nos permite obtener el último elemento en entrar
    peek() {
       this.top;
    }

    // Nos permite agregar un elemento a nuestra pila
    push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.length += 1;
       this;
    }

    // Nos permite eliminar el último elemento
    pop() {
      if (this.length > 0) {
        this.top = this.top.next;
        this.length -= 1;
        if (this.length === 0) {
          this.bottom = null;
        }
      }
    }
  };


    const stack = new Stack(1);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    console.log(stack.peek());