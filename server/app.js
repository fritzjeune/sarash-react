const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require('./config/config').get(process.env.NODE_ENV);

// importing routes
const DressRouter = require("./routes/dress");

const app = express();



mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.use(express.json());
app.use(cookieParser());

// mounting routes 
app.use("/api/dresses", DressRouter);


const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
