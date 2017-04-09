var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var productManager = require('../modules/products.js');

productManager.add(uuid.v4().toString(),'Body Spray','Mountain Rain','Body scent that lasts over 24 hours, even after bathing.','http://localhost:2225/mushrooms.png');
productManager.add(uuid.v4().toString(),'Body Spray','Ocean Breeze','Body scent spray - smells like the ocean','http://localhost:2225/vine.png');
productManager.add(uuid.v4().toString(),'Drinkable','Gene Curer','Codes DNA to regenerate damaged genes.','http://localhost:2225/wings.png');
productManager.add(uuid.v4().toString(),'Air Freshener', 'Neutralizer', 'Kills all odors within a 100 square foot radius, up to 75 hours.','http://localhost:2225/map.png');
productManager.add(uuid.v4().toString(),'Air Freshener', 'No Blunts', 'Kills marijuana odor.','http://localhost:2225/dragonflies.png');
productManager.add(uuid.v4().toString(),'Air Freshener', 'No Odor', 'Kills toilet odor.','http://localhost:2225/cube.png');

// home page
router.get('/', function(req, res){
	res.render('index',{title:'Express | Foundation Demo'});
});

// about page
router.get('/about', function(req, res){
	res.render('about',{title:'About'});
});

// contact page
router.get('/contact', function(req, res){
	res.render('contact',{title:'Contact',errors:req.validationErrors()});
});

// contact page form submitted
router.post('/contact', function(req, res){
    req.checkBody('email', 'Enter a valid email address').isEmail();
    req.checkBody('name','Provide your name').isLength({min:1});
    req.checkBody('subject','What\'s the reason for the message?').optional();
    req.checkBody('message','Enter your message').isLength({min:1,max:100});
    
    var errors = req.validationErrors();
    if (errors) {
        res.render('contact',{title:'Contact', errors:errors});
        return;
    } else {
        res.render('contact',{title:'Contact',errors:undefined});
    }
});

// products category list
router.get('/products/:category', function(req, res){
    const category = req.params.category;
    var searchList = productManager.list(), resultsList = [];
    
    for (var c in searchList) {
        var objC = searchList[c];
        if (category.trim().toLowerCase() == objC.category.trim().toLowerCase()) {
            resultsList.push(objC);
        }
    }
    
    var items = '';
    switch(resultsList.length) {
        case 1:
            items = resultsList.length + ' item';
            break;
            
        case 0:
            items = 'No items';
            break;
            
        default:
            items = resultsList.length + ' items'; 
            break;
    }
    
    if (resultsList.length > 0) {        
        res.render('category', {title:category,category:category,products:resultsList,items:items,results:true});
    } else {        
        res.render('category', {title:category,category:category,products:['No items in this category'],items:items,results:false});
    }    
});

// single product
router.get('/product/:id', function(req, res){
    const id = req.params.id.toString();
    var product = null;
    
    if (null != (product = productManager.find(id))) {
        res.render('item', {'title':product.title,'product':product,'category':product.category});
    } else {
        res.redirect('/products');
    }
});

// products list
router.get('/products', function(req, res){
    var items = '';
    switch(productManager.list().length) {
        case 1:
            items = productManager.list().length + ' item';
            break;
            
        default:
            items = productManager.list().length + ' items'; 
            break;
    }
    res.render('products',{title:'Products',products:productManager.list(),items:items});
});

// search
router.post('/search', function(req, res){
    const keyword = req.body.keyword;
    // console.log('Keyword: ' + keyword);
    var searchList = productManager.list(), resultsList = [];
    
    for (var p in searchList) {
        var product = searchList[p];
        if (keyword.trim().toLowerCase() == product.id.trim().toLowerCase() ||
            keyword.trim().toLowerCase() == product.title.trim().toLowerCase() ||
            keyword.trim().toLowerCase() == product.category.trim().toLowerCase()) {
                resultsList.push(product);
        }
    }
        
    var items = '';
    switch (resultsList.length) {
        case 1:
            items = 'Found ' + resultsList.length + ' item';
            break;
            
        default:
            items = 'Found ' + resultsList.length + ' items';
            break;
    }
    
    if (resultsList.length > 0) {
        res.render('search',{title:'Search','found':true,'results':resultsList,'items':items,'keyword':'Keyword: ' + keyword});
    } else {
        res.render('search',{title:'Search','found':false,'results':['No Results'],'items':items,'keyword':'Keyword: ' + keyword});
    }
});

module.exports = router;