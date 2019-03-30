const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const orderModel = new Schema (
//     {
//         name: {type: Schema.Types.ObjectId, ref: "Product", required: true}, 
//         quantity : {type: Number, default: 1},
//         note : {type: String},
//         totalPrice: {type: Number}
//     },
//     {
//         _id: false
//     }
// );

const billModel = new Schema ( 
    {
        items: [
            {
                productId: {type: Schema.Types.ObjectId, ref: "Product", required: true},
                quantity: {type: Number, required: true},
                note: {type: String},
                price: {type: Number, required: true}
            }, 
            {
                _id: false
            }
        ],
        totalPrice: {type: Number},
        employee: {type: Schema.Types.ObjectId, ref: "Employee"}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Bill", billModel);