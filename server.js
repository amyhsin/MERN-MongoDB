const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.js');

const app = express();

app.use(express.urlencoded({ extended: false})); //ensure all the data are sent from front-end to backend
app.use(express.json({ extended: false}));

const dbUrl = "mongodb+srv://Ting:<password>@orangefeedback.vmtbb.mongodb.net/react-feedback?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("MongoDB is connected.");
    } catch (error) {
        console.log(error);
    }
}

//connect Database
connectDB();

app.post("/api/contact", async (req,res) => {  //front-end to backend
    try {
        await User.create({
            Name: req.body.userName,
            Email: req.body.userEmail,
            PhoneNumber: req.body.userPhone,
            Suggestion: req.body.userSug
        });
        res.json({
            message: "Feedback received" //respond from  backend to front-end, in JSON format
        })

    } catch (error) {
        res.json({
            message: "Error! Please try again later."
        })
    }
    
    console.log(req.body);

});

app.get("/", (req,res) => {
    
});

const Port = 5000;

app.listen(Port, () => {
    console.log("Server is running on Port " + Port);
})