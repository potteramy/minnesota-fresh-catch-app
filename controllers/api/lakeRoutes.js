const router = require("express").Router();
const Lake = require("../../models/Catch");

//Get all lakes
router.get("/", (req, res) => {
  Lake.findAll().then((lakeData) => {
    res.json(lakeData);
  });
});

// Get a single lake
router.get("/:id", (req, res) => {
  Lake.findByPk(req.params.id).then((lakeData) => {
    res.json(lakeData);
  });
});

//Create a lake
router.post("/", async (req, res) => {
  try {
    const newLake = await Lake.create({
      ...req.body
    });

    res.status(200).json(newLake);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete a lake
router.delete("/:id", async (req, res) => {
  try {
    const lakeData = await Lake.destroy({
      where: { id: req.params.id }
    });

    if (!lakeData) {
      res.status(404).json({ message: "No lake found with this id!" });
      return;
    }

    res.status(200).json(lakeData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
