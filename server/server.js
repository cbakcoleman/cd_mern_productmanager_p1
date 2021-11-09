// 1. Set up server using following three lines and app.list(PORT......)
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

// MIDDLEWARE
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}))

// 3. Connect to mongodb
require("./config/mongoose.config");

// 7. Import functions to server
const routesFunction = require("./routes/product.routes");
routesFunction(app);

app.listen(PORT, () => console.log(`Server up on port: ${PORT}`))