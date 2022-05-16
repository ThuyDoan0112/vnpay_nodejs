/**
 * Created by vinhnt on 6/16/2017.
 */

var express = require("express");
var router = express.Router();

const vnpayController = require("../controllers/vnpay.controller");

// router.get("/", function (req, res, next) {
//   res.render("orderlist", { title: "Danh sách đơn hàng" });
// });

router.get("/create_payment_url", function (req, res, next) {
  var dateFormat = require("dateformat");
  var date = new Date();

  var desc =
    "Thanh toan don hang thoi gian: " + dateFormat(date, "yyyy-mm-dd HH:mm:ss");
  res.render("order", {
    title: "Tạo mới đơn hàng",
    amount: 10000,
    description: desc,
  });
});

router.post("/create_payment_url", vnpayController.createPaymentUrl);

router.get("/vnpay_return", vnpayController.vnpayReturn);

module.exports = router;
