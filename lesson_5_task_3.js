/*3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/


const productObject = {
    render(product) {
        // воспроизводит
        return `<div class="good">
        <div><b>Наименование</b>: ${product.name}</div>
        <div><b>Цена за шт.</b>: ${product.price}</div>
        <div><b>Количество</b>: ${product.quantity}</div>
        <div><b>Стоимость</b>: ${product.quantity * product.price}</div>
    </div>`;
    }
}


const OurPage = {

    productsCatalog: null,
    productObject,

    goods: [
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


    ],


    // чтобы браузер показал все goods, мы должны создать ссылку на basket из html & goods добавять в ссылку при помощи foreach & insertAdjacentHTML 

    init() {
        this.productsCatalog = document.querySelector('.basket');
        this.clearbasket = document.querySelector('.Clear')
        this.clearbasket.addEventListener('click', () => this.ClearBasket());

        this.SeeOurCatalog();
    },


    SeeOurCatalog() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.productsCatalog.insertAdjacentHTML('beforeend', this.productObject.render(good));
            });
            this.productsCatalog.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.TotalPrice()}`)
        }
        else {
            this.productsCatalog.textContent = 'Корзина пуста'
        }
    },

    TotalPrice() {
        var counter = 0
        for (let i = 0; i < this.goods.length; i++) {
            counter += this.goods[i].price * this.goods[i].quantity
        }
        return counter

    },

    ClearBasket() {
        this.goods = []
        this.SeeOurCatalog();
    }
}

OurPage.init();
