const Courses = require("../Models/courseSchema");

module.exports.addCourse = async (req, res) => {
  const newCourse = await Courses.create(req.body);
  return res.status(201).send({ message: "New Course Added", newCourse });
};

module.exports.getCourse = async (req, res) => {
  const CoursesData = await Courses.find();
  return res.status(201).send({ message: "New Course Added", CoursesData });
};
