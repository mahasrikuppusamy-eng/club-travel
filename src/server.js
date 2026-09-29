require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

// MongoDB
const mongoUri = process.env.MONGODB_URI;

if (mongoUri) {
    mongoose.connect(mongoUri)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.error("MongoDB Error:", err));
} else {
    console.log("MONGODB_URI is not set; database features are unavailable.");
}


// Campus Club
const memberSchema = new mongoose.Schema({
    memberId: String,
    name: String,
    email: String,
    club: String
});

const Member = mongoose.model("Member", memberSchema);


// Travel Buddy
const travellerSchema = new mongoose.Schema({
    travellerId: String,
    name: String,
    email: String,
    destination: String
});

const Traveller = mongoose.model(
    "Traveller",
    travellerSchema
);


// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});


// Campus Club
app.post("/members", async (req, res) => {

    const member = new Member({
        memberId: req.body.memberId,
        name: req.body.memberName,
        email: req.body.memberEmail,
        club: req.body.club
    });

    await member.save();

    res.send("Campus Club Member Added");
});


// Travel Buddy
app.post("/travellers", async (req, res) => {

    const traveller = new Traveller({
        travellerId: req.body.travellerId,
        name: req.body.travellerName,
        email: req.body.travellerEmail,
        destination: req.body.destination
    });

    await traveller.save();

    res.send("Travel Buddy Added");
});


// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});