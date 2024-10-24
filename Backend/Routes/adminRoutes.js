const express = require("express");
const { addCourse, getCourse } = require("../Controllers/adminController");

const router = express.Router(); // It's common to use lowercase for 'router'

router.post("/add-course", addCourse);
router.get("/get-course", getCourse);
// router.post("/auth-user", authUser);
// router.post("/add-lead", addContact);
module.exports = router;
