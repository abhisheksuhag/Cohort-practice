const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router();


router.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username, password
    })
    res.json({
        message:"User created successfully"
    })
});

router.get("/courses", async (req, res)=>{
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

router.post("/courses/:courseId", userMiddleware, (req, res)=>{
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try{
        User.updateOne({
            username: username
        }), {
            "$push": {
                purchasedCourses : mongoose.Types.ObjectId(courseId)
            }
        }
    }catch(error){
        console.log(error);
    }

    res.json({
        message: "Course purchased successfully"
    })
})

router.post("/purchasedCourses", userMiddleware, async (req, res)=>{
    const user = await User.findOne({
        username: req.headers.username
    });

    const courses = await Course.find({
        _id : {
            "$in": user.purchasedCourses
        }
    })

    console.log(user.purchasedCourses);
    res.json({
        course: courses
    })
});

module.exports = router;