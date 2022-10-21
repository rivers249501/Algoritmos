class Node {
    constructor(value) {
      this.leftdown = null;
      this.rightdown = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
      this.container = {};
    }
    reorder() {
      const arrayArray = Object.entries(this.container);
      let arrayClean = [];
      for(let i = 0 ; arrayArray.length > i; i++) {
        arrayClean[i] = arrayArray[i][1];
      }
      let middle = arrayArray.length
      middle = parseInt(middle/2) 
      this.root = new Node(arrayClean[middle])
      for(let i = 0; arrayClean.length > i; i++) {
        this.insert(arrayClean[i]);
      }
      return arrayClean;
    }
    insert(value) {
      if(value === Number) {  
        const newNode = new Node(value);
        let currentNode = this.root;
    
        if(!this.root) {
          this.root = newNode;
          this.container[this.root.value] = this.root.value
          return this;
        } else {
          while(true) {
            if (value == currentNode.value) {
              return "If you want to update the node, please use 'update'"
            }
            if(value < currentNode.value) {
              if (!currentNode.leftdown) {
                currentNode.leftdown = newNode;
                this.container[currentNode.leftdown.value] = currentNode.leftdown.value
                return this;
              } else {
                currentNode = currentNode.leftdown;
              }
            } else {
              if (!currentNode.rightdown) {
                currentNode.rightdown = newNode;
                this.container[currentNode.rightdown.value] = currentNode.rightdown.value
                return this;
              } else {
                currentNode = currentNode.rightdown;
              }
            }
          }
        }
      } else {
          return `You need to enter data type Number, ${value} it's not valid`
      }
  
    }
    update(value) {
      if(value === Number) {  
        const newNode = new Node(value);
        let currentNode = this.root;
        if(!this.root) {
          this.root = newNode;
          return this;
        } else {
          while(true) {
            if (value == currentNode.value) {
              const beforeitem = currentNode;
              currentNode = newNode;
              return `Was update the before node ${beforeitem.value} to ${currentNode.value}`
            } else if(value < currentNode.value) {
              if (currentNode.leftdown) {
                currentNode = currentNode.leftdown;
              } 
            } else {
              if (currentNode.rightdown) {
                currentNode = currentNode.rightdown;
              }
            }
          }
        }
      } else {
          return `You need to enter data type Number, ${value} it's not valid`
      }
    }
    search(value) {
      if(value === Number) {  
      } else {
          return `You need to enter data type Number, ${value} it's not valid`
      }
      try {
        let currentNode = this.root;
        if(value === Number) {
          if(this.root) {
            while(true) {
              if(value == currentNode.value) {
                return currentNode
              } else if(value < currentNode.value) {
                if (currentNode.leftdown) {
                  currentNode = currentNode.leftdown;
                } else {
                  return `Node with value ${value} not was found`;
                }
              } else {
                if (currentNode.rightdown) {
                  currentNode = currentNode.rightdown;
                } else {
                  return `Node with value ${value} not was found`;
                }
              }
            }
          } else {
            return "There're not data, use instance-->> .insert(value) to enter data"
          }
        } else {
          return `You need to enter data type Number, ${value} it's not valid`
        }
      } catch(err) {
        logMyErrors(err.prototype.message)
      }
  
  
    }
  
  }
  
  const tree = new BinarySearchTree();
  
  tree.insert(2);
  tree.insert(3);
  tree.insert(12);
  tree.insert(87);
  tree.insert(7);
  tree.insert(42);
  tree.insert(54);
  tree.insert(67);
  tree.insert(2);
  tree.insert(1);
  tree.insert(6);
  tree.insert(10);
  tree.insert(3);
  tree.search(b);
  
  //CÓDIGO A PROBAR
  
  tree.update(3);
  tree.search(2);
  tree.container
  tree.reorder()

    const binarySearchTree = new BinarySearchTree(1);
    binarySearchTree.insert(10);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(20);
    binarySearchTree.insert(10);
    binarySearchTree.insert(170);