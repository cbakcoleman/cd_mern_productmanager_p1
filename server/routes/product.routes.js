// 6. Create Routes to execute functions to the DB

const ProductController = require("../controllers/product.controllers");

const {findAllProducts, findOneProduct, updateProduct, createNewProduct, deleteProduct} = require("../controllers/product.controllers");

module.exports = app => {
    app.get("/api/products", findAllProducts);
    app.get("/api/products/:id", findOneProduct);
    app.put("/api/products/:id", updateProduct);
    app.post("/api/products/new", createNewProduct);
    app.delete("/api/products/delete/:id", deleteProduct);
}