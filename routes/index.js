var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var ProductType = require("../models/productType");
var Bill = require("../models/bill");
/* GET home page. */

router.post("/producttype", function (req, res, next) {
    let productType = new ProductType({
        type: "sinh to",
    });
    productType.save().then(() => {
        res.send("success");
    });
});

async function getProducts() {
    let res = await Product.find().populate('type').exec();
    return res;
}

router.get("/products", function (req, res, next) {
    getProducts().then((result) => {
        res.send(result);
    });
});
router.post("/", (req, res, next) => {
    let product = new Product({
        name: "dmm",
        price: 7999,
        type: "5cb09f78c9af1e1a748ef4fe"
    });
    product.save().then(() => {
        res.json("success");
    })
})
router.post("/create-bill", (req, res, next) => {
    let bill = new Bill(req.body);
    bill.save().catch(err=>{
        console.log(err)
    }).then(() => {
        res.send("success");
    });
})
module.exports = router;
