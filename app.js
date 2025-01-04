const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./API/routes/routes");
const app = express();
app.use(express.json());
// app.use(cors());
// app.use('/' , Routes)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

const mongooseURL = "mongodb+srv://Rama_server:123456780@cluster0.snxtn.mongodb.net/"
mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

app.get('/live', (req, res) => {
  res.status(200).json({live: true})
})

app.use("/", Routes);

module.exports = app 