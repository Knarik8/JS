/*1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру 
в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, 
где Tf – температура по Фаренгейту, Tc – температура по Цельсию*/


// вариант 1
function Tf(Tc) {
    var Tf = (9 / 5) * Tc + 32;
    return Tf;
}
alert(Tf(5))


// вариант 2
var Tc = prompt('Задайте температуру в градусах по Цельсию');
var Tf = (9 / 5) * Tc + 32;

alert(`${Tf} в градусах по Фаренгейту`);


/* 2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку "Василий";
Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).*/

var _name;
var _admin;
var _name = 'Василий';
_admin = _name;
alert(_admin)


// 3. *Чему будет равно JS-выражение 1000 + "108"

1000108

// 4. *Самостоятельно разобраться с атрибутами тега script (async и defer)

общее: async и defer не блокируют отрисовку страницы, т.е.пользователь сразу увидит содержимое страницы.
    различия: async - при наличии нескольких скриптов, что первое загрузится, то и запустится.DOMContentLoaded - может загрузится до того, как страница полностью загрузится.
        defer - скрипты запускаются по порядку(как расположены в документе).DOMContentLoaded - выполняется после загрузки и обработки документа.