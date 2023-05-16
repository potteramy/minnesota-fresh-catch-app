const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//user/id
router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
    });
    const user = userData.get({ plain: true });
    // Pass serialized data and session flag into template
    res.render('profile', {
      ...user, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log("test")
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect(`/user/${req.session.user_id}`);
    return;
  }

  res.render('login');
});

module.exports = router;
