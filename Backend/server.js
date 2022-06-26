const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const exerciseRoute = require("./route/exercise");
const userRoute = require("./route/users");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("success");
}).catch((err) =>{
    console.log(err,"error");
}) 


app.use('/exercises',exerciseRoute);
app.use('/users',userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});