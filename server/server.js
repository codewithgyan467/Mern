const express = require("express");
const app = express();
const home = require("../controllers/authcontrollers")
app.use(express.json());
// Correct path to the auth-router.js file
const authRouter = require("./router/auth-router");

// Use the auth router for /api/auth
app.use("/api/auth", authRouter);

// Default route (home page)
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the homepage");
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
