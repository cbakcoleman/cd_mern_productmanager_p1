// 4. Create the mongoose schema

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    Title: String,
    Price: Float32Array,
    Description: String
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;