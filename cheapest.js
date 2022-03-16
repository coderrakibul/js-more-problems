var phones = [
    {name : "Samsung", model : "S12", price : 25000, ram : "8GB"},
    {name : "Oppo", model : "S12", price : 20000, ram : "8GB"},
    {name : "Xiaomi", model : "S12", price : 27000, ram : "8GB"},
    {name : "Huwei", model : "S12", price : 21000, ram : "8GB"},
    {name : "Walton", model : "S12", price : 22000, ram : "8GB"},
    {name : "Symphony", model : "S12", price : 8000, ram : "8GB"},
    {name : "Nokia", model : "S12", price : 12000, ram : "8GB"},
]
var cheapest = phones[0];
for(var phone of phones){
    if( phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);