const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(express.static('.'));
app.use(bodyParser.json());


app.get('/catalogData', (req, res) => {
    fs.readFile('catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/cartData', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            res.send(data);
        }
    });
});

app.post('/addToCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            let itemCount = 0;
            cart.forEach(cartItem => {
                if (cartItem.id_product === item.id_product) {
                    itemCount++;
                    cartItem.count++;
                }
            });
            if (itemCount === 0) {
                cart.push({
                    ...item,
                    count: 1,
                });
            }
            fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send(JSON.stringify({result: 1, cart: cart}));
                }
            });
        }
    });
});

app.post('/removeFromCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            let num = -1;
            cart.forEach((cartItem, index) => {
                if (cartItem.id_product === item.id_product) {
                    if (cartItem.count > 1) {
                        cartItem.count --;
                    } else {
                        num = index;
                    }
                }
            })
            if (num !== -1) {
                cart.splice(num, 1);
            }
            fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send(JSON.stringify({result: 1, cart: cart}));
                }
            });
        }
    });
});


app.listen(8080, () => {
    console.log('server is running on port 8080');
});