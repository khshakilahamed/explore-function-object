var skyColor = "white";

var phones = ['iphone', 'Xiaomi', 'Samsung', 'lg', 'htc'];
phone[3] = 'walton';

// check oppo not exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log("opps! amir khan oppo is missing");
}

// if lg is available
if (phones.indexOf('lg' != -1)) {
    console.log('Lg is available now');
}

// loop
var num = 0;
while (num <= 10) {
    console.log("");
    num++;
}

for (var i = 0; i < phones.length; i++) {
    console.log("");
}

function addThreeNumbers(num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
}

addThreeNumbers(87, 31, 39);

// object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: black
};
