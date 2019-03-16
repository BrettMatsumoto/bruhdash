var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    var first = arr.shift();
    return first
  },

  // returns the last element of an array
  last: function (arr) {
    var last = arr.pop();
    return last
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr,i) {
    return arr.indexOf(i)
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr,i) {
    return arr.lastIndexOf(i);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var newArr = [];
    for (i=0;i<arr.length;i++){
      if (typeof arr[i] === 'number' && arr[i]>0){
        newArr.push(arr[i])
      }
      if (typeof arr[i] === 'string' && arr[i].length>0){
        newArr.push(arr[i])
      }
    }
    return newArr
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr) {
    return arr.slice(arr[1], arr.length-1)
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr,n){
    if (typeof n === 'number'){
      return arr.slice(n);
    } else {
      return arr.slice(1);
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr,n) {
    if (typeof n === 0){
      return arr.slice()
    } else if (typeof n === 'undefined'){
      return arr.slice(0, arr.length - 1)
    } else {
      return arr.slice(0, arr.length - n)
      }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr,n=1) {
    if (n > arr.length){
      return arr;
    } else if (n === '') {
      return arr.splice(0,1);
    } else {
      return arr.splice(0,n);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr,n) {
    if (n > arr.length){
      return arr
    } else if (n === 0){
      return []
    } else if (n == undefined){
      return arr.splice(-1)
    } else {
      return arr.splice(-n)
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr,i,start,end) {
      if(i === 'undefined'){
        return arr.fill(i,0,arr.length)
      } else {
        return arr.fill(i,start,end)
      }
  },

  // removes all given values from an array
  pull: function (arr,ind,ind2) {
    for (var i = arr.length-1; i > -1; i--){
      if (arr[i] == ind || arr[i] == ind2){
        arr.splice(arr[i],1)
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
