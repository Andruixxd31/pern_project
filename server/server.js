require("dotenv").config();

const db = require('./db')

const { json } = require("express");
const express = require("express");
const morgan = require("morgan")

const app = express();

app.use(morgan("dev"))
app.use(express.json())

app.get("/api/v1/restaurants", async (req, res) => {
    const results = await db.query("SELECT * FROM restaurants")
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            restaurants: results.rows
        }
    })
});

app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params)
    res.status(200).json(req.params["id"])
});


app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
});

app.patch("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server listening at port ", port);
});
