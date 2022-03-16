/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    var perChair = 3;
    var perTable = 10;
    var perBed = 50;
    var chairWood = chairQuantity * perChair;
    var tableWood = tableQuantity * perTable;
    var bedWood = bedQuantity * perBed;

    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

var firstOptiopn = woodCalculator(15, 7, 3);
console.log(firstOptiopn);