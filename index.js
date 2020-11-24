//1
function sum(num1, num2){
    return num1 + num2
}
var result = sum(987, 246)
console.log(result)

//2
function largestNum(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return (num1)
    } else if(num2 >= num1 && num2 >= num3){
        return (num2)
    } else {
        return (num3)
    }
}
var largest = largestNum(60, 92, 90)
console.log(largest)

//3
function number(num1){
    if(num1 % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}
var result = number(16)
console.log(result)

//optional challenge 1
function myStrFunction(str){
    if(str.length >= 20){
        return (str.slice(0, str.length/2))
    } else {
        return (str.concat(str))
    }
}

var strResult = myStrFunction("Short Str")
console.log(strResult)

//Optional challenge 2 (prints array and sum but doesn't work. uses the value of n, not index n)
Array.prototype.last = function(){
    return this[this.length-1];
}

Array.prototype.secondToLast = function(){
    return this[this.length-2];
}

function sumFibs(n){
    var sequence = [0, 1];
    var fibArray = []; 
    for(var i = 0; i <= n; i++)
        fibArray[i] = n;
    while (sequence.secondToLast([i]) + sequence.last([i]) <= i) {
        sequence.push(sequence.secondToLast() + sequence.last());
    }
    return sequence.filter(function(n){
        return fibArray
    }) + " with sum " + 
    sequence.filter(function(n){
        return n;
    }).reduce (function(a, b) {
        return a + b;
    });
}
console.log(sumFibs(13))

//optional challenge 3
function maxChar(str){
    const charMap = {};
    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else{
            charMap[char] = 1;
        }
    }
    console.log(charMap)
}

maxChar("a man a plan a canal panama")
