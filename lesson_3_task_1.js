// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var my_list = []
var numbers = [1]
var primes = []
var i = 2
while (i < 100) {
    my_list.push(i);
    numbers.push(i);
    i++
}

counter = 0
for (var m = 2; m < my_list.length; m++) {
    counter = 0
    for (var j = 1; j < numbers.length; j++) {
        if (m % j == 0)
            counter += 1
    }
    if (counter <= 2)
        (primes.push(m));
}


console.log(primes)