/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2); 
  }
  return result;
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sum1 = 0;
var sum2 = 0;

var sumArrays = function(arr1, arr2){
  for(var i=0; i<arr1.length; i++){
    sum1 += arr1[i];
  }
  for(var j=0; j<arr2.length; j++){
    sum2 += arr2[j];
  }

  return sum1 + sum2;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str){
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(arr){
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var sum = 0;
var countAll = function(arr){
  for(var i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */

//Initialize array for lengths
var lengths = [];
var stringLength = 0;

var countStrings = function(arr){
  for(var i=0; i<arr.length; i++){
    stringLength = arr[i].length;
    //console.log(stringLength);
    lengths.push(stringLength);
    //console.log(lengths);
  }
  return lengths;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */

var sumStrings = 0;

//Loops through each array element and gets the length and adds it to the sum
var countAllStrings = function(str){
  for(var i=0; i<str.length; i++){
    sumStrings += str[i].length; 
    //console.log(str[i].length);
    //console.log(sumStrings);
  }
  return sumStrings;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */

var valueArray = [];

var convertToArray = function(obj){
  for(var prop in obj){
    //console.log(obj[prop]);
    valueArray.push(obj[prop]);
  }
  return valueArray;
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var count = 0;

var objectSize = function(obj){
  //Loop through all the keys in the object
  for(var key in obj){
    count++; //This works because it will go through each kay so in each loop, the count will increase and it will stop when there are no more keys
  }

  return count;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */

 var zeroArray = [];
var createZeroFilledArray = function(num){
  for(var i=1; i<=num; i++){
    zeroArray.push(0);
  }
  return zeroArray;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr){
  arr.pop();
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */

var splitString = function(str){
  var splitted = str.split("");
  //console.log(splitted);
  return splitted;
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(str){
  var arrLength = str.length;
  var lastLength = str[arrLength - 1].length;
  return lastLength;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */

var total = 0;

var sumBelowTen = function(arr){
  for(var i=0; i<arr.length; i++){
    //console.log("arr[i]: " + arr[i]);
    if(arr[i] <= 10){
      total += arr[i];
      //console.log("total: " + total)
    }
  }
  return total;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(arr){
  var count = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i].length > 10){
      count++;
    }
  }
  return count;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */

var product = 1;

var multiplyAll = function(arr){
  for(var i=0; i<arr.length; i++){
    product *= arr[i];
  }
  return product;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumNonNeg = 0;

var sumAllPositive = function(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i] > 0){
      sumNonNeg += arr[i];
    }
  }
  return sumNonNeg;
}


/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr){
  var count = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i].length <= 3){
      //console.log("arr[i]: " + arr[i]);
      count++;
    }
  }
  return count;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr){
  return arr.length;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj){
  var keysArray = [];
  //Loop through all the keys in the obj
  for(var key in obj){
    keysArray.push(key);
  }
  return keysArray;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */

var getObjectValues = function(obj){
  var propArray = [];
  for(var prop in obj){
    propArray.push(obj[prop]);
  }
  return propArray;
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value){
  var singleObj = {};
  singleObj[key] = value; //singleObj[key] is the same as singleObj.key
  //console.log(singleObj);
  return singleObj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key){
  var reverseObj = {};
  reverseObj[key] = value;
  return reverseObj;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr){
  var tupleObj = {};
  tupleObj[arr[0]] = arr[1];
  return tupleObj;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr){
  var tupleReverseObj = {};
  tupleReverseObj[arr[1]] = arr[0];
  return tupleReverseObj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr){
  var strObj = {};
  for(var i=0; i<arr.length; i++){
    strObj[arr[i]] = 0;
    //console.log(strObj);
  }
  return strObj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj){
  var valueArray = [];
  for(var key in obj){
    valueArray.push(obj[key]);
  }
  return valueArray;
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
  var keyArray = [];
  for(var key in obj){
    keyArray.push(key);
  }
  return keyArray;
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  var tuplesArray = [];

  for(var key in obj){
    //Push the key-value pair into the inner array, then push the inner array into the out array
    var tuple = []; //Reset tuple array as an empty array for the next key-value pair
    tuple.push(key);
    tuple.push(obj[key]);
    //console.log(tuple);
    tuplesArray.push(tuple);
    //console.log(tuplesArray);
  }
  return tuplesArray;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr){
  var arrayObj = {};
  for(var i=0; i<arr.length; i++){
    arrayObj[arr[i]] = false;
  }
  return arrayObj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arr1, arr2){
  var twoArrObj = {};
  for(var i=0; i<arr1.length; i++){
      twoArrObj[arr1[i]] = arr2[i];
  }
  return twoArrObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2){

  var arrayOfTuples = [];

  for(var key in obj1){
    var tuple1 = [];
    tuple1.push(key);
    tuple1.push(obj1[key]);
    arrayOfTuples.push(tuple1);
  } 

  for(var key in obj2){
    var tuple2 = [];
    tuple2.push(key);
    tuple2.push(obj2[key]);
    arrayOfTuples.push(tuple2);
  } 
  return arrayOfTuples;

}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr){
  var obj = {};
  for(var i=0; i<arr.length; i++){
    obj[arr[i]] = true;
  }
  return obj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */

var mapStringCounts = function(arr){

  var stringObj = {};

  for(var i=0; i<arr.length; i++){
    if(arr[i].length >= 5){
      stringObj[arr[i]] = true;
    }
    else {
      stringObj[arr[i]] = false;
    }
  }
  return stringObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr){
  var obj = {};

  for(var i=0; i<arr.length; i++){
    obj[arr[i]] = true;
  }

  return obj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str){
  var obj = {};
  var stringArray = [];

  stringArray = str.split("");
  for(var i=0; i<stringArray.length; i++){
    obj[stringArray[i]] = true;
  }

  return obj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr){
  var obj = {};

  for(var i=0; i<arr.length; i++){
    obj[arr[i]] = arr[i].length;
  }

  return obj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(arr){
  var obj = {};
  var value = 1;
  
  for(var i=0; i<arr.length; i++){

      //git aconsole.log("starting value: " + value);
    if(arr[i] === arr[i+1]){
      value++;
      //console.log("new value: " + value);
    }
    else{
      obj[arr[i]] = value;
      //console.log(obj);
      //Reset Value
      value = 1;
    }
  }

  return obj;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(arr){
  var obj = {};

  for(var i=0; i<arr.length; i++){
    obj[arr[i][0]] = arr[i][1];
  }

  return obj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}