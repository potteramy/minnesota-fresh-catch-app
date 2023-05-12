//Set up a route listener for any path taken by user with "*" to ensure user is logged_in; if not, redirect to login page//

const router = require("express").Router()


const withAuth = router.use("*", (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next(); //pass off the req down the route chain
  }
});

module.exports = withAuth;