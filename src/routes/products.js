const express = require("express");
const productModel = require("../models/product");
const cors = require('cors');

const app = express();
app.use(cors());

const router = express.Router();


//crear producto
router.post("/products", (req, res) => {
  productModel
    .create(req.body)
    .then((data) => res.json(data))
    .then(() => console.log("Se ha creado un producto"))
    .catch((error) => res.json({ message: error }));
});

//read products
router.get("/products", (req, res) => {
  productModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar productos
router.delete("/products", (req, res) => {
    productModel.deleteMany({})
      .then((data) => res.json({ message: "Todos los productos han sido eliminados." }))
      .catch((error) => res.json({ message: error }));
  });



module.exports = router;
