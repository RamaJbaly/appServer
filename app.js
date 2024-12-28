const express = require("express");
const mongoose = require("mongoose");
const { message } = require("statuses");
const Routes = require("./API/routes/routes");
const app = express();
app.use(express.json());
// app.use(cors());
// app.use('/' , Routes)

const mongooseURL = "mongodb+srv://Rama_server:123456780@cluster0.snxtn.mongodb.net/"
mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

app.post("/pasname", (req, res) => {
  const { password, name } = req.body
  if (password === "jijijimy" && name === "lora")
    res.status(200).json({
      message: "success"

    })
  res.status(400).json({
    message: "the name or password not correct"

  })
}
)


app.post("/sum", (req, res) => {
  const { x, y } = req.body
  if (!x && !y) {
    res.status(200).json({
      message: "please enter x and y"
    })
    return;
  }
  res.status(200).json({ total: x + y })

})



app.post("/getAvg", (req, res) => {
  const { array } = req.body;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  res.status(200).json({ total: sum / array.length })

  console.log(sum);
})

app.get('live', (req, res) => {
  res.status(200).json({live: true})
})

app.use("/", Routes);

module.exports = app 