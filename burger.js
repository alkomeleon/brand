"use strict"
/*
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий).
### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий).
### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
### Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
* Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.
* (Можно модифицировать класс товара в рамках своего проекта, чтобы можно было в дальнейшем сделать вариатор товара.
* Придумать минимум 6 дополнительный свойств. Хотя бы 2 свойства должны влиять на стоимость и/или возможное значение других свойств.
* На каждый метод должен быть геттер и сеттер)
* */



class Hamburger {
    constructor(size, stuffing) {
        this.sizes = {
            small: {
                name: "Маленький",
                price: 50,
                calories: 20,
            },
            big: {
                name: "Большой",
                price: 100,
                calories: 40,
            },
        }
        this.size = this.sizes[size];
        this.stuffings = {
            cheese: {
                name: "Сыр",
                price: 10,
                calories: 20,
            },
            salad: {
                name: "Салат",
                price: 20,
                calories: 5,
            },
            potato: {
                name: "Картофель",
                price: 15,
                calories: 10,
            }
        }
        this.stuffing = this.stuffings[stuffing];
        this.topping = {
            priprava: {
                name: "Приправа",
                price: 15,
                calories: 0,
            },
            mayo: {
                name: "Майонез",
                price: 20,
                calories: 5,
            }
        }
        this.toppings = [];
    }

    addTopping(topping) {
        // Добавить добавку
        this.toppings.push(this.topping[topping]);
    }
    removeTopping(topping) {
        // Убрать добавку
        let top = this.topping[topping];
        this.toppings.splice(this.toppings.indexOf(top),1);
    }
    getToppings(topping) {
        // Получить список добавок
        return this.toppings;
    }
    getSize() {
        return this.size.name;
    }
    getStuffing() {
        return this.stuffing.name;
    }
    calculatePrice() {
        // Узнать цену
        let price = this.size.price + this.stuffing.price;
        this.toppings.forEach(item => price += item.price);
        return price;
    }
    calculateCalories() {
        // Узнать калорийность
        let calories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(item => calories += item.calories);
        return calories;
    }
}