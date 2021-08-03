var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }


// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i == 2) {
//         break;
//     }
// }

var numbers = [23, 29, 19, 49, 30, 28, 20, 40, 90, 100, 194, 200, 300];
// break
console.log('break: ');
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}

// continue
console.log('continue: ');
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number >= 100) {
        continue;
    }
    console.log(number);
}