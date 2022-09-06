'use strict';
//Все товары
const goods = [
    { id: 1, title: 'Blue jacket', price: 52.01, cn: '深蓝色 夹克' },
    { id: 2, title: 'Set of clothes', price: 52.02, cn: '套衣服' },
    { id: 3, title: 'Hoodie Shorts', price: 52.03, cn: '连帽衫 短裤' },
    { id: 4, title: 'Clothes', price: 52.04, cn: '男士 衣服' },
    { id: 5, title: 'White T-shirt', price: 52.05, cn: '白色T恤' },
    { id: 6, title: 'T-shirt Cap', price: 52.06, cn: '白色 T恤 帽' },
    { id: 7, title: 'Mens clothing', price: 52.07, cn: '男士服装' },
    { id: 8, title: 'Black clothes', price: 52.08, cn: '黑色衣服' },
    { id: 9, title: 'Shirt Shorts', price: 52.09, cn: '衬衫 短裤' },
];

/**
 * Класс корзина
 * delProd(id) Method. Удалить товар из корзины                    删除
 * render()    Method. Вывод списка товара корзины                 列表
 * calcCount() Method. Получить кол-во товаров в корзине           数量
 * calcSum()   Method. Получить сумму товаров в корзине            总和            
 * @param {string} container  - селектор блока корзины
 */
class Cart {
    constructor(container = '.cart_card__list') {
        this.container = container;
        this.goods = [    // Товар в корзине
            { id: 1, title: 'Blue jacket', price: 52.01, count: 1 },
            { id: 2, title: 'Set of clothes', price: 52.02, count: 2 },
        ];
    }

    delProd(id) {
        for (let el of this.goods) {                             //周期
            if (el.id == id) {
                let k = Number.parseInt(el.count);
                k -= 1;
                el.count = k;
                if (k < 1) {
                    this.goods.splice(this.goods.indexOf(el), 1);
                }
                console.log(this.goods);
                const block = document.querySelector('.cart_card__list');
                block.innerHTML = '';
                this.render();
            }
        }
    }

    render() {
        const emptyCartEl = document.querySelector('.cart_card__empty');
        const block = document.querySelector(this.container);
        const countEl = document.querySelector('.cart_card__itog')
            .nextElementSibling;
        const itogEl = countEl.nextElementSibling;
        if (block) {
            block.innerHTML = '';                                //空的
            for (let product of this.goods) {
                const productObj = new elemCart(product);
                if (+product.count > 0) {
                    block.insertAdjacentHTML('beforeend', productObj.render());
                }
            }
            if (this.goods.length < 1) {
                emptyCartEl.classList.remove('hidden');
            }
            else {
                emptyCartEl.classList.add('hidden');
            }
            countEl.innerHTML = '';                              //空的
            countEl.insertAdjacentHTML('beforeend',
                `Кол-во: ${this.calcCount()} шт.`);
            itogEl.innerHTML = '';                               //空的
            itogEl.insertAdjacentHTML('beforeend',
                `Сумма: $ ${this.calcSum()}`);
        }
    }
    calcCount() {
        return this.goods.reduce((accum, item) => accum += item.count, 0);
    }
    calcSum() {                                                  //返回
        return Math.round(this.goods.reduce(
            (accum, item) => accum += item.count * item.price, 0) * 100) / 100;
    }

}


class elemCart {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.kol = product.count;
        this.id = product.id;
        this.img = `img/catalog/k${product.id}.jpg`;
    }
    render() {
        return `                                                 
            <div class="cart_card_product" data-id="${this.id}">
                <div class="cart_card_product__img">
                  <img src="${this.img}" alt="Some img">
                </div>  
                <div class="cart_card_product__info">
                    <div class="product-title">${this.title}</div>
                    <div class="product-single-price">Цена: ${this.price} $</div>
                    <div class="product-quantity">Количество: ${this.kol} шт</div>
                </div>
                <div class="cart_card_product__right">
                   <div class="product-price">Сумма: 
                           ${Math.round(this.kol * this.price * 100) / 100}</div>
                   <button class="del-btn" onClick="del_prod(${this.id});">
                   &times;
                   </button>
                </div>    
            </div>`
    }
}


const clist = new Cart();

const btnCartEl = document.querySelector('.cartIcon');
const divCart = document.querySelector('.cart_card');
btnCartEl.addEventListener('click', () => {
    if (divCart.classList.contains('hidden')) {
        clist.render();
    }
    divCart.classList.toggle('hidden');
});

const catalogEl = document.querySelector('.catalog');
catalogEl.addEventListener('click', ({ target }) => {
    if (!(target.parentElement.className == 'cardImgBuy')) {
        return;
    }
    const el = target.parentElement.parentElement.parentElement;
    buyProd(el.dataset.id);
});


function buyProd(id) {
    let f = false;
    for (let el of clist.goods) {
        if (el.id == id) {
            f = true;
            let k = Number.parseInt(el.count);
            k += 1;
            el.count = k;
        }
    }
    //если еще не купили этот товар, то добавляем новую запись в корзину
    if (!f) {
        for (let el of goods) {
            if (el.id == id) {
                clist.goods.push({
                    "id": el.id,
                    "title": el.title,
                    "price": el.price,
                    "count": 1
                });
            }
        }
    }
    const block = document.querySelector('.cart_card__list');
    block.innerHTML = '';
    clist.render();
}

const del_prod = (id) => {
    clist.delProd(id);
};

