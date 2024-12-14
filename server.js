const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8000;
const server = http.createServer(app);

app.listen(port)


app.get("/app", (req, res) => {
    res.status(200).json({
        name: "btata",
        age: 15,

    })

})
app.get("/aaa", (req, res) => {
    res.status(200).json({
        name: "tomato",
        age: 23,
        place: "space",
        nickname: "tomato monster",
    })
})
app.post("/whatismyname", (req, res) => {
    const { name, lastName } = req.body
    if (!name && !lastName) {
        res.status(400).json({
            message: "please Enter your name and last name"
        })

    }
    res.status(200).json({ message: "Hello " + name + " " + lastName })


})
app.post("/agename", (req, res) => {
    const { name, age } = req.body
    if (age < 18) {
        res.status(500).json({
            message: "you are very young"
        })
    }
    res.status(200).json({
        message: "welcome,our guest"
    })
})


module.exports = server;






