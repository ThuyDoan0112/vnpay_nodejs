const express = require("express");
const router = express.Router();
const viewController = require("../controllers/view.controller");

router.get("/", viewController.getHome);
router.get("/cart", viewController.getCart);
router.get("/order/create_payment_url", viewController.getOder);

module.exports = router;
