const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require("./src/routes/products");
//comment

const app = express();
const PORT = process.env.PORT || 9000;

console.log("1");

//midelware
app.use(express.json());
app.use('/api', userRoutes);

console.log("2");


//routes
app.get('/', (req, res) => {
    res.send("Bienvenidos a mi Api")
})

console.log("3");


//mongodb conection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Estas conectado a MONGODB ATLAS"))
.catch((error) => console.error(error));

console.log("4");


app.listen(PORT, () => console.log("El servidor se esta escuchando en el puerto", PORT));

module.exports = app;

