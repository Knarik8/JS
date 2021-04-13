/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

// var basket = [
//     ['леггинсы', 1000, 1],
//     ['спортивный костюм', 3000, 2],
//     ['футболка', 500, 3],
//     ['кеды', 2000, 1]
// ]
// function countBasketPrice(basket) {
//     counter = 0
//     for (let i = 0; i < basket.length; i++) {
//         counter += basket[i][1] * basket[i][2]
//     }
//     return counter;
// }

// console.log(countBasketPrice(basket));



var basket = [
    {
        name: 'леггинсы',
        price: 1000,
        quantity: 1
    },
    {
        name: 'спортивный костюм',
        price: 3000,
        quantity: 2,
    },
    {
        name: 'футболка',
        price: 500,
        quantity: 3,
    },
    {
        name: 'кеды',
        price: 2000,
        quantity: 1,
    },
]

function countBasketPrice(basket) {
    counter = 0
    for (let i = 0; i < basket.length; i++) {
        counter += basket[i].price * basket[i].quantity
    }
    return counter;
}


console.log(countBasketPrice(basket));


