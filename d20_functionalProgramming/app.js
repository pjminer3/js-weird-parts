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
var arr2 = [];

console.log(arr1);

for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);