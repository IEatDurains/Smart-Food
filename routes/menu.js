const express = require('express');
const router = express.Router();
const item_class = require('../class/item_class')
const Item = require('../models/Item');
const sessionStorage = require('node-sessionstorage');
const order_class = require('../class/order_class');

router.get('/menu', (req, res) =>{
    // never add a request yet, though having req now
    Item.findAll({
        raw: true
    }).then((items) =>{
        // passing object to MainMenu.handlebar
        res.render('menu/menu', {
            items
        });
    })
    .catch(err => console.log(err));
});

// this shows all orders

router.get('/menuAlpha', (req, res) =>{
    Item.findAll({
        raw: true
    }).then((items) =>{
        res.render('menu/menuAlpha', {
            items
        });
    })
    .catch(err => console.log(err));
});


// this is old menu-chinese, testing smth new....
router.get('/menu-chinese-old', (req, res) =>{
    var User = sessionStorage.getItem("user");
    // console.log(User);
    Item.findAll({
        where:{
            cat: 'chinese'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-chinese-old', {
            User,
            items
        });
    }).catch(err => console.log(err));
});

router.get('/menu-chinese', (req, res) =>{
    var User = sessionStorage.getItem("user");
    console.log(User);
    Item.findAll({
        where:{
            cat: 'chinese'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-chinese', {
            User,
            items
        });
    }).catch(err => console.log(err));
});

router.post('/menu-order/:admin/:item', (req, res) => {
    order_class.createOrder(req.params.item, req.params.admin);
})



router.get('/menu-malay', (req, res) =>{
    Item.findAll({
        where:{
            cat: 'malay'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-malay', {
            items
        });
    }).catch(err => console.log(err));
});


router.get('/menu-indian', (req, res) =>{
    Item.findAll({
        where:{
            cat: 'indian'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-indian', {
            items
        });
    }).catch(err => console.log(err));
});

router.get('/menu-western', (req, res) =>{
    Item.findAll({
        where:{
            cat: 'western'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-western', {
            items
        });
    }).catch(err => console.log(err));
});

router.get('/menu-fusion', (req, res) =>{
    Item.findAll({
        where:{
            cat: 'fusion'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-fusion', {
            items
        });
    }).catch(err => console.log(err));
});

router.get('/menu-vegetarian', (req, res) =>{
    Item.findAll({
        where:{
            cat: 'vegetarian'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-vegetarian', {
            items
        });
    }).catch(err => console.log(err));
});

router.get('/menu-desserts', (req, res) =>{
    Item.findAll({
        where:{
            cat: 'desserts'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-desserts', {
            items
        });
    }).catch(err => console.log(err));
});

router.get('/menu-drinks', (req, res) =>{
    Item.findAll({
        where:{
            cat: 'drinks'
        },
        raw: true
    }).then((items) =>{
        res.render('menu/menu-drinks', {
            items
        });
    }).catch(err => console.log(err));
});


module.exports = router;