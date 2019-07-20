var _ = require('lodash');

function shuffleData(arr) {
    return _.shuffle(arr);
}

function getMax(arr){
    return _.max(arr);
}

function getmean(arr){
    return _.mean(arr);
}

function getSum(arr) {
    return _.sum(arr)
}

function filterPositive(arr, positive=true){
    if (positive){
        return _.filter(arr, num => {return num > 0})
    }
    else {
        return _.filter(arr, num => {return num < 0})
    }
}



function exercise1(){
    var test_arr = [1, 2, 3, 4, 5];
    for (i = 0; i < 5; i++){
        console.log(shuffleData(test_arr))
    }
}

function exercise2(){
    arr = Array.from({length: 40}, () => Math.floor(Math.random() * 10));
    let sum = getSum(arr);
    let max = getMax(arr);
    let mean = getmean(arr);
    console.log(`Sum: ${sum}, Max: ${max}, Mean: ${mean}`)
}

function exercise3(){
    /*create a random array of 40 ints, call a function to filter for positive and
    negative numbers.
    */

    arr = Array.from({length: 40}, () => Math.floor(Math.random() * 10) - 5);
    var positive = filterPositive(arr)
    var negative = filterPositive(arr, false)
    console.log(`positive: ${positive}, negative: ${negative}`)
}



console.log('exercise 1');
exercise1();
console.log('-----------');
console.log('-----------');
console.log('-----------');
console.log('exercise 2');
exercise2();
console.log('-----------');
console.log('-----------');
console.log('-----------');
console.log('exercise 3');
exercise3();
