const router = require("express").Router();
const Catch = require("../../models/Catch");

//Get all catch records
router.get("/", (req, res) => {
  Catch.findAll().then((catchData) => {
    res.json(catchData);
  });
});

// Get a single catch record
router.get("/:id", (req, res) => {
  Catch.findByPk(req.params.id).then((catchData) => {
    res.json(catchData);
  });
});

//
router.post("/", async (req, res) => {
  console.log("fresh catch")
  try {
    const newCatch = await Catch.create(req.body);
    console.log(newCatch)
    res.status(200).json(newCatch);
    res.redirect("back")
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete a catch :(
router.delete("/:id", async (req, res) => {
  try {
    const catchData = await Catch.destroy({
      where: { id: req.params.id }
    });

    if (!catchData) {
      res.status(404).json({ message: "No catch found with this id!" });
      return;
    }

    res.status(200).json(catchData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
