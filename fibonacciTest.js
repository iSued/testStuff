//first 100 fibonacci numbers with for loop
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 
let a, b, c;
a = 0;
b = 1;
c = b;
for (i = 1; i <= 10; i++) {
    console.log(c);
    c = a + b;
    a = b;
    b = c;
};

let pre, next, result, counter;
pre = 0;
next = 1;
result = 1;
counter = 1;
while (counter <= 10) {
    console.log(result);
    result = pre + next;
    pre = next;
    next = result;
    counter++;
}

// !!REMEMBER questions on position