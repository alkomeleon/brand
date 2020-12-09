"use strict"
let cartItem = Vue.component('cart-item', {
    props: ['item', 'removeFromCart'],
    template: '<div class="cart-menu">\n' +
        '                    <div class="cart-menu-img">\n' +
        '                        <img v-bind:src="\'img/\' + item.img" alt="shirt">\n' +
        '                    </div>\n' +
        '                    <div class="cart-menu-info">\n' +
        '                        <p>{{item.product_name}}</p>\n' +
        '                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><br>\n' +
        '                        <span>{{item.count}} x ${{item.price}}</span>\n' +
        '                    </div>\n' +
        '                    <a v-on:click="$emit(\'remove\')"  href="#"><i class="fas fa-times-circle"></i></a>\n' +
        '                </div>'
});

let shoppingCart = Vue.component('shopping-cart', {
    props: ['cart', 'cartSum'],
    data: function() {
        return {
            cartVisible: false,
        };
    },
    template: '<div><div class="cart-icon" v-on:click="cartVisible = !cartVisible"><img src="img/cart.png" alt="cart"></div>\n' +
        '            <div class="cart-menu-box" v-if="cartVisible">\n' +
        '                <div class="tail1 cart-tail1"></div>\n' +
        '                <div class="tail2 cart-tail2"></div>\n' +
        '                <cart-item v-for="item in cart" v-bind:item="item" v-on:remove="$emit(\'remove\', item)" :key="item.id_product"></cart-item>\n' +
        '                <div class="cart-menu-price">\n' +
        '                    <p>TOTAL</p>\n' +
        '                    <p>${{cartSum}}</p>\n' +
        '                </div>\n' +
        '                <div class="cart-menu-checkout-button-box">\n' +
        '                    <a class="cart-menu-checkout-button" href="checkout.html">checkout</a>\n' +
        '                    <a class="cart-menu-checkout-button" href="shopingCart.html">go to cart</a>\n' +
        '                </div>\n' +
        '      </div></div>'
});

let catalog = Vue.component('catalog', {
    props: ['goods', 'searchText'],
    template: '<div class="featured-content">\n' +
        '                <div class="products" v-for="item in goods" v-if="item.product_name.toLowerCase().includes(searchText.toLowerCase())"  :key="item.id_product">\n' +
        '                    <img class="prod-img" v-bind:src="\'img/\' + item.img" alt="item">\n' +
        '                    <p class="description">{{item.product_name}}</p>\n' +
        '                    <p class="price">${{item.price}}</p>\n' +
        '                    <div class="img-hover">\n' +
        '                        <button v-on:click="$emit(\'add\', item)"><img src="img/cart.svg" alt="cart">Add to Cart</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '     </div>'
});

let search = Vue.component('search', {
    data: function() {
      return {
          searchLine: ''
      };
    },
    template: '<div class="header-search">\n' +
        '                <div class="search-browse">Browse &nbsp; <i class="fas fa-caret-down"></i>\n' +
        '                </div>\n' +
        '                <input type="text" class="input-text" name="search" v-model="searchLine" placeholder="Search for Item...">\n' +
        '                <button v-on:click="$emit(\'filter\', searchLine)"><i class="fas fa-search"></i></button>\n' +
        '     </div>'
});

let error = Vue.component('error', {
   template: '<div class="catError container"><slot></slot></div>'
});

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        cart: [],
        responseOk: true,
        searchText: ''
    },
    methods: {
        async fetchGoods() {
            try {
                let response = await fetch("/catalogData");
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
        async fetchCart() {
            try {
                let response = await fetch("/cartData");
                if (response.ok) {
                    this.cart = await response.json();
                } else {
                    this.responseOk = false;
                }
            } catch (e) {
                this.responseOk = false;
            }
        },
        filterGoods(searchLine) {
            if (searchLine.length >= 3) {
                this.searchText = searchLine;
            } else {
                this.searchText = "";
            }
        },
        async addToCart(item) {
            try {
                let response = await fetch("/addToCart", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(item)
                });
                if (response.ok) {
                    let resp = await response.json();
                    if (resp.result === 1) {
                        this.cart = resp.cart;
                    }
                }
            } catch (e) {
                this.responseOk = false;
            }
        },
        async removeFromCart(item) {
            try {
                let response = await fetch("/removeFromCart", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(item)
                });
                if (response.ok) {
                    let resp = await response.json();
                    if (resp.result === 1) {
                        this.cart = resp.cart;
                    }
                }
            } catch (e) {
                this.responseOk = false;
            }
        }
    },
    mounted() {
        this.fetchGoods();
        this.fetchCart();
    },
    computed: {
        cartSum(){
            let sum = 0;
            this.cart.forEach(item => {
                sum += item.count*item.price;
            });
            return sum;
        }
    },
    components: {
        'shopping-cart': shoppingCart,
        'cart-item': cartItem,
        'catalog': catalog,
        'search': search
    },
});