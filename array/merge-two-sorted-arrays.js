
//ES6 Merge two sorted array
function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a,b) => a-b);
}

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

console.log(mergeTwo(arr1, arr2));


//VanillaJS Merge Sorted array
function mergeSortedArray(a,b){
    var tempArray = [];
    var currentPos = {
        a: 0,
        b: 0
    }
    while(currentPos.a < a.length || currentPos.b < b.length) {
        if(typeof a[currentPos.a] === 'undefined') {
            tempArray.push(b[currentPos.b++]);
        } else if(a[currentPos.a] > b[currentPos.b]){
            tempArray.push(b[currentPos.b++]);
        } else {
            tempArray.push(a[currentPos.a++]);
        }
    }
    return tempArray;
}
console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]));