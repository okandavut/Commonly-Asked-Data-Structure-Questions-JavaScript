
//ES6 Solution
var array = [-85, 8, -1, 6, 4, 3, -2, -15, 0, 17];
const min = Math.min(...array)
const secondMin = array.reduce((pre, cur) => (cur < pre && cur !== min) ? cur : pre
  , Infinity)
console.log(secondMin);

//////////////////////////////////////////////////

//Vanilla JS
function findSecondLargeNumber(){
    var array = [-85, 8, -1, 6, 4, 3, -2, -15, 0, 17];
    var min = Infinity
    var secondMin;  
    for (var i= 0; i< array.length; i++) {
        if (array[i]< min) {
            secondMin = min;
            min = array[i]; 
        } else if (array[i]< secondMin) {
            secondMin = array[i]; 
        }
    }
	
	return secondMin;
	
}
 console.log(findSecondLargeNumber())