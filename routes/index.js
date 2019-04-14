var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var ProductType = require("../models/productType");
var mongoose = require("mongoose");
/* GET home page. */

router.post("/producttype", function (req, res, next) {
    let productType = new ProductType({
        type: "sinh to",
    });
    productType.save().then(()=>{
        res.send("success");
    });
});


router.get("/", function (req, res, next) {
    res.render("index", {title: "Express"});
});

router.get("/products", function (req, res, next) {
    Product.find().populate('type').exec(function(err, result){
        if(err) throw err
        result[0]['type'] = type;
        res.json(result);
    });
});
router.post("/", (req, res, next) => {
    let product = new Product({

        name: "dmm",
        price: 7999,
        type: "5cb09f78c9af1e1a748ef4fe"
    });
    product.save().then(()=>{
        res.json("success");
    })
})
module.exports = router;
