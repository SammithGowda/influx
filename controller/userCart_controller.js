const express = require("express");
const router = express.Router();
const Items = require("../module/item_module");
const Cart = require("../module/userCart_module");
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().lean().exec();
    return res.status(201).send(cart);
  } catch (er) {
    return res.status(501).send({ Message: er.message });
  }
});

router.post("/", async (req, res) => {
  //   console.log(req.body.code);
  try {
    const item = await Items.findOne({ code: req.body.code }).lean().exec();
    if (!item) return res.status(400).send({ message: "Item Not found" });
    const selected_price = item.price;

    const qty = req.body.qty;

    const totalAmount = selected_price * qty;

    const finalobj = {
      code: req.body.code,
      qty: qty,
      unitprice: selected_price,
      totalAmount: totalAmount,
      orderId: req.body.orderId,
    };

    const cartitem = await Cart.create(finalobj);

    return res.status(201).send(cartitem);
  } catch (er) {
    return res.status(501).send({ Message: er.message });
  }
});

module.exports = router;
