// getting argument in a function
function bringSingara(taka) {
    console.log("singara er jonno diche", taka);
    console.log("Mama singara den");
    var singraraPrice = 10;
    var singaraQuantity = taka / singraraPrice;
    return singaraQuantity;
}

var money = 250;
// passing parameter
var singara = bringSingara(money);
console.log("Ai nen singara", singara);