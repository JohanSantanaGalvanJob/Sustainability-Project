const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');
const multer = require('multer');
// const upload = multer();
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });







// parse requests of content-type multipart/form-data
// app.use(upload.array()); 

// User route
require("./routes/user.routes.js")(app);
 
// Category route
require("./routes/category.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});