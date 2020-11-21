"use strict"
class ShoppingCartItem {
    constructor(name, price, quantity=1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    add (quantity=1) {
        this.quantity += quantity;
    }

    subtract(quantity=1) {
        this.quantity -= quantity;
        if(this.quantity < 0){
            this.quantity = 0;
        }
    }

    getPrice() {
        return this.price;
    }

    getSubTotal() {
        return this.quantity * this.price;
    }
}


class ShoppingCart {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    remove(item) {
        this.items.splice(this.items.indexOf(item),1);
    }

    getItems() {
        return this.items;
    }

    clear() {
        this.items = [];
    }

    /* это функция goodsSum из задания 2 */
    getTotal() {
        let summ = 0;
        this.items.forEach(item => summ += item.getSubTotal());
        return summ;
    }

    makeOrder(){

    }
}

