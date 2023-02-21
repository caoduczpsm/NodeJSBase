const Course = require('../models/Course');

const { multipleMongooseToObject } = require('../../util/moogoose');

class SiteController {
  // GET /
  index(req, res, next) {
    Course.find({})
      .then((course) => {
        res.render('home', {
          course: multipleMongooseToObject(course),
        });
      })
      .catch(next);
  }

  // GET /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
