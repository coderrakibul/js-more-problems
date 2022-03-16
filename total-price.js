var products = [
    {name: "laptop", price: 43000},
    {name: "shirt", price: 500},
    {name: "watch", price: 3680},
    {name: "phone", price: 55000}
]

var totalPrice = 0;
for(var product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);


var cart = [
    {name: "laptop", price: 43000, quantity: 1},
    {name: "shirt", price: 500, quantity: 8},
    {name: "watch", price: 3680, quantity: 3},
    {name: "phone", price: 55000, quantity: 1 }
];

var cartTotal = 0;
for (var product of cart){
    console.log(product);
    var productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
