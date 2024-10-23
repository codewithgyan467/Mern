const express = require("express");
const app = express();
const home = require("../controllers/authcontrollers")
app.use(express.json());

const authRouter = require("./router/auth-router");

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the homepage");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
