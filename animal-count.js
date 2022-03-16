function animalCount(miles){
    var animalFirstTenMile = 10;
    var animalSecondTenMile = 50;
    if(miles <= 10){
        var count = miles * animalFirstTenMile;
        return count;
    }
    else if (miles <= 20){
        var firstTen = 10 * animalFirstTenMile;
        var restMiles = miles - 10;
        var secondTen = restMiles * animalSecondTenMile;
        var totalAnimals = firstTen + secondTen;
        return totalAnimals;
    }
}

var animals = animalCount(10);
console.log(animals);
var animals = animalCount(20);
console.log(animals);


function leapYear(year) {
    const reminder = year % 4;
    if(reminder == 0){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(leapYear(202));