// 5. Use Mongoose Model to create CRUD functions

const Product = require("../models/product.models")

module.exports = {
    // READ (ALL)
    findAllProducts : (req, res) => {
        Product.find()
        .then(allDaProducts => res.json({ message: "Success!", products: allDaProducts }))
        .catch(err => res.json({ mgessage: "Pobody's Nerfect!", error: err }));
    },
    // READ (ONE)
    findOneProduct : (req, res) => {
        Product.findById( req.params.id)
        .then(oneProduct => res.json({ message: "Success!", product: oneProduct}))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // CREATE
    createNewProduct : (req, res) => {
        Product.create(req.body)
        .then(newProduct => res.json({ message: "Success!", product: newProduct}))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // UPDATE
    updateProduct : (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json({ message: "Success!", product: updatedProduct}))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    },
    // DESTROYYYYY
    deleteProduct : (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(result => res.json({ message: "Success!", result: result }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    }
}