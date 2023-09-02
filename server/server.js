require("dotenv").config();

const db = require('./db')

const { json } = require("express");
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const app = express();

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants")
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        })
    } catch (err) {
        console.log(err)        
    }
});

app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id])
        if (results.rows.length === 0){
            res.status(404).json({
                status: "Item not found",
                data: {
                    message: "No restaurant found with given id"
                }
            })
        }
        else {
            res.status(200).json({
                status: "success",
                results: results.rows.length,
                data: {
                    restaurants: results.rows[0]
                }
            })
        }
    } catch (err) {
       console.log(err) 
    }
});


app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query(
            "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) returning *",
            [req.body.name, req.body.location, req.body.price_range]
        )
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
                message: "Restaurant added"
            }
        })
    } catch (err) {
        console.log(err)
    }
});

app.patch("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(
            "UPDATE restaurants SET name = COALESCE($1, name), location = COALESCE($2, location), price_range = COALESCE($3, price_range) WHERE id = $4 returning *", 
            [req.body.name, req.body.location, req.body.price_range,req.params.id]
        )
        if(results.rows.length === 0){
            res.status(404).json({
                status: "Item not found",
                data: {
                    message: "No restaurant found with given id"
                }
            })
        }
        else {
            res.status(200).json({
                status: "success",
                data: {
                    restaurant: results.rows[0]
                }
            })
        }
    } catch (err) {
       console.log(err) 
    }
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(
            "DELETE FROM restaurants WHERE id = $1 returning *",  
            [req.params.id]
        )
        if(results.rows.length === 0){
            res.status(404).json({
                status: "Item not found",
                data: {
                    message: "No restaurant found with given id"
                }
            })
        }
        else {
            res.status(204).json({
                status: "success",
                data: {
                    message: "restaurant deleted",
                    restaurant: results.rows[0]
                }
            })
        }
    } catch (err) {
       console.log(err) 
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server listening at port ", port);
});
