require('dotenv').config()
const mongoose = require("mongoose");

// const connectionString= process.env.MONGODB_URI;
const connectionString = process.env.MONGODB_URI;


mongoose.connect(connectionString);

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Types.ObjectId,
        ref: "Course",
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number,
});


const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
    Admin, User, Course
}

