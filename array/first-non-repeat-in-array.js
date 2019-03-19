//ES6 Solution

// with arrays
const dupArr = [1, 1, 2, 3, 1];
const uniArr = [...(new Set(dupArr))];
console.log(uniArr) //array of non duplicated items
console.log(uniArr[0]) //first non duplicated item
 

// with objects on a key.
const dupObj = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 1, value: 'c' }];
const uniKeys = [...(new Set(dupObj.map(({ id }) => id)))];
console.log(uniKeys) //array of non duplicated items
console.log(uniKeys[0]) //first non duplicated item


////////////////////////////////////

// Vanilla JS
var arr = [1,2,2,3,3,4,4,5,5,6];

var uniq = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j] && i != j) break;
    else if (j == arr.length - 1) {uniq.push(arr[i]); break;}
  }
  if(uniq.length == 1)
  break;
}

console.log(uniq)