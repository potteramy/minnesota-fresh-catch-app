const router = require('express').Router();
const { Fish } = require('../../models');
const withAuth = require("../../utils/auth")

router.post('/', withAuth, async (req, res) => {
  try {
    const newFish = await Fish.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFish);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const fishData = await Fish.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!fishData) {
      res.status(404).json({ message: 'No fish found with this id!' });
      return;
    }

    res.status(200).json(fishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
