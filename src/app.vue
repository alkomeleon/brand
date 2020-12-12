<template>
    <div id="app">
        <div class="header container">
            <div class="header-left">
                <a href="index.html"><img src="img/logo.png" alt="logo">Bran<span>d</span></a>
                <search v-on:filter="filterGoods($event)"></search>
            </div>
            <div class="header-right">
                <shopping-cart v-bind:cart="cart" v-bind:cart-sum="cartSum" v-on:remove="removeFromCart($event)"></shopping-cart>
                <a class="my-acc" href="#">My Account &nbsp; <i class="fas fa-caret-down"></i></a>
            </div>
        </div>
        <div class="header-line"></div>
        <div class="nav">
            <ul class="menu-list">
                <li class="menu-item"><a class="menu-link" href="#">Home</a></li>
                <li class="menu-item"><a class="menu-link" href="#">Man</a></li>
                <li class="menu-item">
                    <a class="menu-link" href="singlePage.html">Women</a>
                    <div class="nav-menu-box">
                        <div class="tail1 nav-tail1"></div>
                        <div class="tail2 nav-tail2"></div>
                        <div class="nav-menu-header">Women</div>
                        <ul class="nav-menu-list ">
                            <li><a  href="#">Dresses</a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Sweaters/Knits</a></li>
                            <li><a href="#">Jackets/Coats</a></li>
                            <li><a href="#">Blazers</a></li>
                            <li><a href="#">Denim</a></li>
                            <li><a href="#">Leggings/Pants</a></li>
                            <li><a href="#">Skirts/Shorts</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                        <div class="nav-menu-header">Women</div>
                        <ul class="nav-menu-list">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Sweaters/Knits</a></li>
                            <li><a href="#">Jackets/Coats</a></li>
                        </ul>
                        <div class="nav-menu-header">Women</div>
                        <ul class="nav-menu-list">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Sweaters/Knits</a></li>
                        </ul>
                        <div class="nav-menu-header">Women</div>
                        <ul class="nav-menu-list">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Sweaters/Knits</a></li>
                            <li><a href="#">Jackets/Coats</a></li>
                        </ul>
                        <div class="nav-menu-sale">
                            <a href="#">Super <br> sale!</a>
                        </div>
                    </div>
                </li>
                <li class="menu-item"><a class="menu-link" href="#">Kids</a></li>
                <li class="menu-item"><a class="menu-link" href="#">Accessories</a></li>
                <li class="menu-item"><a class="menu-link" href="#">Featured</a></li>
                <li class="menu-item"><a class="menu-link" href="checkout.html">Hot deals</a></li>
            </ul>
        </div>
        <div class="product-nav-box container">
            <div class="product-content-box">
                <catalog v-if="responseOk" v-bind:goods="goods" v-bind:search-text="searchText" v-on:add="addToCart($event)"></catalog>
                <error v-else>нет ответа</error>
                <div class="pagination-box">
                    <div class="pagination">
                        <ul>
                            <li><a href="#"><i class="fas fa-angle-left"></i></a></li>
                            <li><a class="active-pagination" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">20</a></li>
                            <li><a href="#"><i class="fas fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                    <button class="view-all">View All</button>
                </div>
            </div>
        </div>
        <div class="sale-info-horiz-box">
            <div class="sale-info-horiz container">
                <div class="sale-block sale-block-center">
                    <div class="sale-img"><img src="img/car.png" alt="car"></div>
                    <div class="sale-info">
                        <h4>Free Delivery</h4>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div class="sale-block sale-block-center">
                    <div class="sale-img"><img src="img/sale.png" alt="sale"></div>
                    <div class="sale-info">
                        <h4>Sales & discounts</h4>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div class="sale-block sale-block-center">
                    <div class="sale-img"><img src="img/crown.png" alt="crown"></div>
                    <div class="sale-info">
                        <h4>Quality assurance</h4>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="subscribe-box">
            <div class="subscribe-content container">
                <div class="to-the-right">
                    <div class="subscribe-text">
                        <img src="img/face.png" alt="face" height="83">
                        <div>
                            <p class="vest">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                            <p class="bin">Bin Burhan</p>
                            <p class="dhaka">Dhaka, Bd</p>
                            <div class="rectangle">
                                <div class="white"></div>
                                <div class="white active-pink"></div>
                                <div class="white"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="subscribe">
                    <div class="to-the-left">
                        <p>Subscribe</p>
                        <span>FOR OUR NEWLETTER AND PROMOTION</span>
                        <form class="email" method="get">
                            <input type="text" name="email" placeholder="Enter Your Email">
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-box container">
            <div class="info">
                <div class="info-text">
                    <a class="brand" href="index.html"><img src="img/logo.png" alt="logo">Bran<span>d</span></a>
                    <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                        <br><br>
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                    </p>
                </div>
                <div class="bottom-nav">
                    <div class="info-links">
                        <h2 class="info-list">COMPANY</h2>
                        <ul>
                            <li class="info-list"><a class="info-list-link" href="#">home</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">shop</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">about</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">how it works</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">contact</a></li>
                        </ul>
                    </div>
                    <div class="info-links">
                        <h2 class="info-list">INFORMATION</h2>
                        <ul>
                            <li class="info-list"><a class="info-list-link" href="#">Tearms & Condition</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">Privacy Policy</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">How to Buy</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">How to Sell</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">Promotion</a></li>
                        </ul>
                    </div>
                    <div class="info-links">
                        <h2 class="info-list">SHOP CATEGORY</h2>
                        <ul>
                            <li class="info-list"><a class="info-list-link" href="#">men</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">women</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">child</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">apparel</a></li>
                            <li class="info-list"><a class="info-list-link" href="#">browse all</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="footer container">
                <div class="copy"> &copy; 2017 Brand  All Rights Reserved. </div>
                <div class="footer-links">
                    <a href="#"><div class="footer-link"><i class="fab fa-linkedin-in"></i></div></a>
                    <a href="#"><div class="footer-link"><i class="fab fa-twitter"></i></div></a>
                    <a href="#"><div class="footer-link"><i class="fab fa-pinterest-p"></i></div></a>
                    <a href="#"><div class="footer-link"><i class="fab fa-facebook-f"></i></div></a>
                    <a href="#"><div class="footer-link"><i class="fab fa-google-plus-g"></i></div></a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import cartItem from "./cartItem.vue";
    import catalog from "./catalog.vue";
    import error from "./error.vue";
    import search from "./search.vue";
    import shoppingCart from "./shoppingCart.vue";

    export default {
        name: 'app',
        data: function () {
            return {
                goods: [],
                cart: [],
                responseOk: true,
                searchText: ''
            }
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
            'search': search,
            'error': error,
        },
        render: h => h(app),
    };
</script>

<style>

</style>