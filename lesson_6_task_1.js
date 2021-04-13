/*1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида*/


OurCatalog = {
    CatalogObject(product) {
        return `<div class="good">
        <div><b>Наименование</b>: ${product.name}</div>
        <div><b>Цена за шт.</b>: ${product.price}</div>
        <div><b>Количество</b>: ${product.quantity}</div>
        <div><b>Стоимость</b>: ${product.quantity * product.price}</div>
        <button class="Buy" data-name = "${product.name}"> Купить</button>
    </div>`;
    },

    goods: [
        {
            name: 'леггинсы',
            price: 1000,
            quantity: 1
        },
        {
            name: 'спортивный костюм',
            price: 3000,
            quantity: 1,
        },
        {
            name: 'футболка',
            price: 500,
            quantity: 1,
        },
        {
            name: 'кеды',
            price: 2000,
            quantity: 1,
        },
    ],

    init(OurCatalog, myBasket) {
        this.productsCatalog = document.querySelector('.catalog');
        this.SeeOurCatalog();
        this.addEventHandlers();
        this.myBasket = myBasket;
    },

    SeeOurCatalog() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.productsCatalog.insertAdjacentHTML('beforeend', this.CatalogObject(good));
            });
        }
        else {
            this.productsCatalog.textContent = 'Каталог пустой'
        }
    },

    addEventHandlers() {
        this.productsCatalog.addEventListener('click', this.addToBasket.bind(this));
    },


    addToBasket(event) {
        if (!event.target.classList.contains('Buy')) return;
        const nameProduct = event.target.dataset.name;
        const productToAdd = this.goods.find((product) => product.name === nameProduct);
        this.myBasket.addToBasket(productToAdd);
    },




}

OurBasket = {
    basketObject(product) {
        // воспроизводит
        return `<div class="good">
            <div><b>Наименование</b>: ${product.name}</div>
            <div><b>Цена за шт.</b>: ${product.price}</div>
            <div><b>Количество</b>: ${product.quantity}</div>
        </div>`;
    },

    myBasket: [
        {
            name: 'футболка',
            price: 500,
            quantity: 2,
        }
    ],

    init() {
        this.basketProducts = document.querySelector('.basket');
        this.clear = document.querySelector('.Clear');

        this.SeeOurBasket();
        this.addEventHandlers();
    },


    addEventHandlers() {
        this.clear.addEventListener('click', this.dropCart.bind(this));
    },

    SeeOurBasket() {
        if (this.myBasket.length) {
            this.basketProducts.innerHTML = '';
            this.myBasket.forEach(good => {
                this.basketProducts.insertAdjacentHTML('beforeend', this.basketObject(good));
            });
        }
        else {
            this.ClearBasket();
        }
    },


    TotalPrice() {
        var counter = 0
        for (let i = 0; i < this.myBasket.length; i++) {
            counter += this.myBasket[i].price * this.myBasket[i].quantity
        }
        return counter


    },


    dropCart() {
        this.myBasket = [];
        this.SeeOurBasket()
    },

    ClearBasket() {
        this.basketProducts.innerHTML = '';
        this.basketProducts.textContent = 'Корзина пуста';
    },
    // ищем продукт в корзине , если есть - куантити ++, если нет пушим
    addToBasket(product) {
        if (product) {

            const findInBasket = this.myBasket.find(({ name }) => product.name === name);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                // this.myBasket.push({ ...product, quantity: 1 });
                this.myBasket.push(Object.assign({ quantity: 1 }, product));
            }
            this.SeeOurBasket();
        } else {
            alert('Ошибка добавления!');
        }
    },



}

/**
 * Подключение каталога и корзины
 */
OurCatalog.init('catalog', OurBasket);
OurBasket.init('basket', 'Clear');


