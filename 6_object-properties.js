var computer = {
    price: 72000,
    storage: '1T',
    color: 'silver',
    processor: 'intel i7'
};

console.log(computer);
console.log(computer.processor); // showing tha value of processor properties

var computerPrice = computer.price; // keeping value in a variable from the object properties.
// console.log(computerPrice);

// set a object property value
computer.price = 22000; // updated value
// console.log(computer);


// different ways to set a value of an object property.
computer.price = 22000; // updated value first way.
computer["price"] = 23000; // updated value second way.
var priceProperty = "price"; // variable of an object property.
computer[priceProperty] = 19000;  // updated value third way.

console.log(computer);