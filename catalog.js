"use strict"
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        cart: [],
        responseOk: true,
        searchLine: '',
        searchText: ''
    },
    methods: {
        async fetchGoods() {
            try {
                let response = await fetch("https://raw.githubusercontent.com/alkomeleon/brand/main/catalog.json");
                if (response.ok) {
                    this.goods = await response.json();
                    console.log(this.goods);
                } else {
                    this.responseOk = false;
                }
            } catch (e) {
                this.responseOk = false;
            }
        },
        filterGoods(event) {
            if (this.searchLine.length >= 3) {
                this.searchText = this.searchLine;
            } else {
                this.searchText = "";
            }
            event.preventDefault();
        },
        addToCart(item) {
            let itemCount = 0;
            this.cart.forEach(cartItem => {
                if(cartItem.id_product === item.id_product) {
                    itemCount++;
                    cartItem.count++;
                }
            })
            if (itemCount === 0) {
                this.cart.push({
                    ...item,
                    count: 1,
                });
            }
            console.log(this.cart);
        },
        removeFromCart(item) {
            let num = this.cart.indexOf(item);
            if (num !== -1) {
                this.cart.splice(num, 1);
            }
        }
    },
    mounted() {
        this.fetchGoods();
    },
    computed: {
        cartSum(){
            let sum = 0;
            this.cart.forEach(item => {
                sum += item.count*item.price;
            });
            return sum;
        }
    }
});