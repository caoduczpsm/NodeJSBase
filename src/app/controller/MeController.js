const Course = require('../models/Course');

const { multipleMongooseToObject } = require('../../util/moogoose');

class MeController {


    // GET /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/storedCourses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }

    // GET /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trashCourses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }

}

module.exports = new MeController();
