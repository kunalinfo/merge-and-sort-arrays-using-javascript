/*
Merge below unsorted array into one array & sort the result array (Do not use built in JavaScript Functions).
	Array 1:		[‘Z’, ‘M’, ‘X’, ‘D’, ‘O’]
	Array 2:		[‘N’, ‘A’, ‘P’, ‘G’, ‘J’]	
*/

/*
Bubble Sort
for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ 
        if (arr[j] > arr[j + 1]) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
 */



var myArray1 = ['Z', 'M', 'X', 'D', 'O'];
var myArray2 = ['N', 'A', 'P', 'G', 'J'];
function addTwoArrays(arr1, arr2) {
  var merge = arr1.length;
  for (let i = 0; i < arr2.length; i++) {
    arr1[merge++] = arr2[i];
  }
  
  for (var i = 0; i < arr1.length ; i++) {
        for(var j = 0 ; j < arr1.length - i - 1; j++){ 
        if (arr1[j] > arr1[j + 1]) {
          // swap
          var temp = arr1[j];
          arr1[j] = arr1[j+1];
          arr1[j + 1] = temp;
        }
       }
      }
  return arr1;
}

console.log(addTwoArrays(myArray1, myArray2));
