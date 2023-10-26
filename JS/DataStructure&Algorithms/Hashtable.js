class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
              if(currentBucket[i][0] === key) {
                return currentBucket[i][1]
              }
            }
        }
        return undefined;
    }

    keys(){
      const keysArray = [];
      console.log(this.data.length);
      for (let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray;
    }
}
  
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')

//First  Recurring Character
//➀
function findFirstRecurringInt(arr) {
  let temp = new Map(); 
  for(let i = 0 ; i < arr.length; i++){
    if( temp.get(arr[i]) ){
      console.log(arr[i]);
      return arr[i]; //found
    }else{
      temp.set(arr[i], i);  
    }
  }
  console.log("Undefined");
  return undefined; 
}
findFirstRecurringInt([1,2,3]);

//➁
function findFirstRecurringInt2(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      console.log(arr[i]);
      return arr[i];
    }else {
      map[arr[i]] = i;
    }
  }
  console.log("Undefined");
  return undefined;
}

findFirstRecurringInt2([1,2,2,1,3])

//➂　O(n^2)
function firstRecurringCharacter(input) {
  let temp = [];
  let temp2 = [];
  for (let i = 0; i < input.length; i++) {
    let count = 1;
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        //console.log(input[i]);
        temp.push(count);
        temp2.push(input[i]);
        break;
      }else {
        count++
      }
    }
  }
  //console.log(temp.length);
  if (temp.length === 0) {
    console.log("Undefined");
    return undefined;
  } else {
    for (let z = 0; z < temp.length; z++) {
      //console.log(temp2[z]);
      if (temp[z] === 1) {
        console.log(temp2[z]);
        return temp2[z];
      }
    }
  }
}
firstRecurringCharacter([1,2,5,5,4,4,1,6])