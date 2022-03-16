function pizzaPanda(foodName, quantity){
    if (foodName.toLowerCase() != "pizza"){
        return "Sorry, we sell Pizza only";
    }
    else if (quantity > 10){
        return "Sorry only 10 pizza left";
    }

    else{
        var price = 10 * quantity;
    var message = "Order successful!, Order info: " + foodName + ", price: " + price + "$";
    return message;
    }
}


var order = pizzaPanda("pizza", 10)
console.log(order);