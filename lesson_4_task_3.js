/*3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» 
в интернет-магазине актуальна не только для корзины, но и для каталога. 
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для 
различных модулей сайта, но в разных местах давал возможность вызывать разные методы.*/

Возможно, создание объекта через конструктор, т.е.иметь структуру типа:

function Product(name, price, size, article, description, producing_country) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.article = article;
    this.description = description;
    this.producing_country = producing_country
}

для корзины можно так же добавить свойство quantity
Product.quantity = quantity

