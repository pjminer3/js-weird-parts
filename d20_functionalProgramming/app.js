// First-Class Functions are functions that act like objects

function mapForEach (arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }

    return newArr;
}


var arr1 = [1, 2, 3];
var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});

console.log(arr1);
console.log(arr2);
console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}  

// How can we use checkPastLimit in our mapForEach when it needs 2 parameters... 
// FUNCTION CURRYING!  But how?!?!?

var arr4 = mapForEach(arr1, checkPastLimit.bind(this,2));

console.log('checkPastLimit work?!?! : ' + arr4); // killed it

// Create a function so we don't have to use bind all the time, and that we only
// have to pass in the limiter

var checkPastLimitSimplified = function(limit) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limit);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));

console.log(arr5);

