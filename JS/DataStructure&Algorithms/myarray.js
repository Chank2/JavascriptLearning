class MyArray{
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
      }
      shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
      }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.deleteAtIndex(0);
newArray.push('are');
newArray.push('nice');
newArray.shiftItems(0);
console.log(newArray);

function reverse(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const originalStr = "Hello, World!";
const reversed = reverse(originalStr);
console.log(reversed);

function mergeSortedArrays(arr1, arr2) {
    let len1 = arr1.length - 1;
    let len2 = arr2.length - 1;
    let sorted = arr1.length + arr2.length - 1;

    while (len2 >= 0){
        if (len1 >= 0 && arr1[len1] > arr2[len2]) {
            arr1[sorted--] = arr1[len1--];
        } else {
            arr1[sorted--] = arr2[len2--];
        }
    }
    return arr1;
}
console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));


