function largestNumber(numbers){
    var largest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        if(number > largest){
            largest = number;
        }
    }
    return largest;
}

var myList = [12, 15, 8, 17, 14, 16];
var large = largestNumber(myList);
console.log(large);

function myFunction(numbers){
    var largest = numbers[0];
    for(var i =0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
var myNumbers = [12, 5, 17, 19, 14, 13];
var largeNumber = myFunction(myNumbers);
console.log(largeNumber);

function myFunction(numbers){
    var smallest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var singleNumber = numbers[i];
        if(singleNumber < smallest){
            smallest = singleNumber;
        }
    }
    return smallest;
    }

    var list = [12, 4, 5, 7, 15];
    var small = myFunction(list);
    console.log(small);