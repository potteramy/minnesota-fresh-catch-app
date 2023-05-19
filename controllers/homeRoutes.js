const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const Catch = require("../models/Catch");

//user/id This is for the "Previous Catches" on the Profile page (Working do not touch)
router.get('/user/:id', withAuth, async (req, res) => {
  console.log("route hit")
  try {
    const userData = await User.findByPk(req.params.id, {
    });
    const user = userData.get({ plain: true });
    const catchData = await Catch.findAll({where: {user_id: user.id}, raw: true});
    console.log("Catch Data:"); 
    console.log(catchData);
    // Pass serialized data and session flag into template
    res.render('profile', {
      ...user, 
      catchData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.error("couldn't render user profile", err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    return res.redirect(`/user/${req.session.user_id}`);
  }

  res.render('login');
});

module.exports = router;
