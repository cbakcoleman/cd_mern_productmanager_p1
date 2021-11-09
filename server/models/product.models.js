// 4. Create the mongoose schema

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product {PATH} is required."],
        minlength: [3, "Product {PATH} must be at least three characters long."]
    },
    price: {
        type: Number,
        required: [true, "Product {PATH} is required."],
        min: [0.99, "Product {PATH} cannot be less than $0.99."]
    },
    description: {
        type: String,
        required: [true, "Product {PATH} is required."],
        minlength: [3, "Product {PATH} must be at least three characters long."]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;