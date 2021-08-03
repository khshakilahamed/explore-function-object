// 1. variable
var favoriteBook = "4hour work week";


// 2. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('Small Giants');
bookList.pop();

// 3. conditionals
if (bookList[1] == 'hooked') {
    console.log("I am hooked");
}
else {
    console.log("I am not Hooked");
}

// 4. loop
// While loop
var i = 0;
while (i <= 10) {
    console.log(i, ")I am kh.Shakil");
    i++;
}

// for loop
for (var i = 0; i < 10; i++) {
    console.log(i, ")I am kh.Shakil");
}