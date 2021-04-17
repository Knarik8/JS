/*4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.*/

var a = 5;
var string = " ";
switch (a) {
    case 1:
        string += a + " ";
        a += 1;
    case 2:
        string += a + " ";
        a += 1;
    case 3:
        string += a + " ";
        a += 1;
    case 4:
        string += a + " ";
        a += 1;
    case 5:
        string += a + " ";
        a += 1;
    case 6:
        string += a + " ";
        a += 1;
    case 7:
        string += a + " ";
        a += 1;
    case 8:
        string += a + " ";
        a += 1;
    case 9:
        string += a + " ";
        a += 1;
    case 10:
        string += a + " ";
        a += 1;
    case 11:
        string += a + " ";
        a += 1;
    case 12:
        string += a + " ";
        a += 1;
    case 13:
        string += a + " ";
        a += 1;
    case 14:
        string += a + " ";
        a += 1;
    case 15:
        string += a + " ";
        a += 1;
    default:
        alert(string);

}

// второй вариант мне больше нравится)

function Say(a) {
    var string = a + " ";
    if (a < 15)
        string += Say(a + 1);
    return string;
}
alert(Say(5))
