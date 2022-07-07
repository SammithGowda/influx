const express = require("express");
const router = express.Router();
const Items = require("../module/item_module");
router.get("/", async (req, res) => {
  try {
    const itemMaster = await Items.find().lean().exec();
    return res.status(201).send(itemMaster);
  } catch (er) {
    return res.status(501).send({ Message: er.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const itemMaster = await Items.create(req.body);

    return res.status(201).send(itemMaster);
  } catch (er) {
    return res.status(501).send({ Message: er.message });
  }
});

module.exports = router;
