var names = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'gabul', 'mabul', 'babul', 'babul', 'cabul'];


function removeDuplicate(names){
    var unique = [];
    for (var element of names){
        console.log(element);
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
var uniqueNumbers = removeDuplicate(names);
console.log(uniqueNumbers);