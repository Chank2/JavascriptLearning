//Bubble Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        // Last i elements are already in place   
        for (let j = 0; j < array.length-i-1; j++) {
            // Checking if the item at present iteration is greater than the next iteration
            if (array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
bubbleSort(numbers);
console.log(numbers);

//Selection Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        // set current index as minimum
        let min = i;
        let temp = array[i];
        for( let j = i+1; j < array.length; j++) {
            if (array[min] > array[j]) {
                // update minimum if current is lower
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}
selectionSort(numbers);
console.log(numbers);

//Insertion Sort①
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if(array[i] < array[0]) {
            //move number to the first pos
            array.unshift(array.splice(i,1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if ( array[i] > array[j-1] && array[i] < array[j]) {
                    //move number to the right spot
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);

//Insertion Sort②
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i-1;
        //Compare the key with elements before it and shift them
        while (j >= 0 && array[j] > key) {
            array[j+1] = array[j];
            j--;
        }
        //Insert the key in the correct pos
        array[j+1] = key;
    }
    return array;
}

insertionSort(numbers);
console.log(numbers);

//Merge Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);
  // Recursively sort each half
  // and Merge the sorted halves
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Compare and merge elements from the two sublists
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  // Add any remaining elements from the sublists (if any)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);

//Quick Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// With Heapsort, even if all of your data is already ordered, you are going to swap 100% of elements to order the array
// With Mergesort, it's even worse. You are going to write 100% of elements in another array and write it back in the original one, even if data is already ordered.
// With Quicksort you don't swap what is already ordered. If your data is completely ordered, you swap almost nothing! 

// Sorting Interviews
//#1 - Sort 10 schools around your house by distance: Insertion Sort

//#2 - eBay sorts listings by the current Bid amount: radix or counting sort

//#3 - Sport scores on ESPN : Quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data: merge sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion Sort(Previous reviews are almost sorted)

//#6 - Temperature Records for the past 50 years in Canada: radix or counting sort

//#7 - Large user name database needs to be sorted. Data is very random: 

//#8 - You want to teach sorting for the first time: Bubble and Selection Sort

//BFS
class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
  this.root = null;
  }
  insert(value){
      const newNode = new Node(value);
      if ( this.root === null) {
          this.root = newNode;
      } else {
          let currentNode = this.root;
          while (true) {
              if ( value < currentNode.value) {
                  //left
                  if (!currentNode.left) {
                      currentNode.left = newNode;
                      return this;
                  }
                  currentNode = currentNode.left
              } else {
                  //right
                  if (!currentNode.right) {
                      currentNode.right = newNode;
                      return this;
                  }
                  currentNode = currentNode.right;
              }
          }
      }
  }
  lookup(value){
      if (!this.root) {
          return false;
      }
      let currentNode = this.root;
      while ( currentNode.left && currentNode.right) {
          if (value < currentNode.value) {
              currentNode = currentNode.left
          } else if (value > currentNode.value) {
              currentNode = currentNode.right;
          } else if (currentNode.value === value){
              return currentNode;
          }
      }
      return null;
  }
  remove(value) {
      if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
      }
  }
  //BFS
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode); 

    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  //DFS
  DFSInOrder() {
    return traverseInOrder(this.root, [])
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, [])
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, [])
  }
}

function traverseInOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  console.log(node.value);
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}


const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))
// console.log('BFS', tree.BreadthFirstSearch());
// console.log('BFS', tree.BreadthFirstSearchR([tree.root], []));
console.log('DFSpre', tree.DFTPreOrder());
console.log('DFSin', tree.DFTInOrder());
console.log('DFSpost', tree.DFTPostOrder());

//     9
//  4     20
//1  6  15  170
//BFS[9, 4, 20, 1, 6, 15, 174]
//DFS[9, 4, 1, 6, 20, 15, 170]
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// DFS
// Inorder - [1, 4, 6, 9, 15, 20, 170]
// Preorder - [9, 4, 1, 6, 20, 15, 170]
// Postorder - [1, 6, 4, 15, 170, 20, 9]