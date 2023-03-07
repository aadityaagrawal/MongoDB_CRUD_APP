const express = require('express')
const { connectToDb, getDb } = require("./db")
const { ObjectId } = require('mongodb')

const app = express()
app.use(express.json())
let db;

// Connecting MongoDB database
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log("Listing on port number 3000");
        });
        db = getDb()
    }
    else {
        console.log("Error connecting to the database")
    }
})


// To read the documents present in the collections
app.get("/books", (req, res) => {
    let bo = []
    db.collection("books")
        .find()
        .sort({ author: 1 })
        .forEach(book => bo.push(book))
        .then(() => {
            res.status(200).json(bo)
        })
        .catch(() => {
            res.status(500).json({ error: "Could Not Fetch the documents" })
        })
})

// To read the documents present in the collections by their id
app.get('/books/:id', (req, res) => {
    db.collection('books')
        .findOne({ _id: new ObjectId(req.params.id) })
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.json({ error: 'could not fetch the document' })
        })
})


// To add the documents in the collection
app.post('/books', (req, res) => {
    let data = req.body
    db.collection('books')
        .insertOne(data)
        .then((data) => {
            res.status(200).json({ data: "data added successfully" })
            console.log(data)
        })
        .catch(err => {
            res.status(500).send("unable to add data")
        })
})

// To delete the document in the collection by their id
app.delete('/books/:id', (req, res) => {
    db.collection('books')
        .deleteOne({ _id: new ObjectId(req.params.id) })
        .then((doc) => {
            res.status(200).send("Deleted Successfully")
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

// To update the document in the collection by their id
app.patch("/books/:id", (req, res) => {
    let data = req.body;
    db.collection("books")
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: data })
        .then(data => {
            res.send("data updated successfully")
        })
        .catch(err => {
            res.send("unable to update data")
        })
})


