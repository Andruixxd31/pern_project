require("dotenv").config();
const express = require("express");

const app = express();

app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurants: "calabacitas tiernas"
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
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.body)
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server listening at port ", port);
});
