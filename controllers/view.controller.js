module.exports = {
  getHome: (req, res, next) => {
    res.render("product.ejs");
  },
  getCart: (req, res, next) => {
    res.render("cart.ejs");
  },
  getOder: (req, res, next) => {
    var dateFormat = require("dateformat");
    var date = new Date();

    var desc =
      "Thanh toan don hang thoi gian: " +
      dateFormat(date, "yyyy-mm-dd HH:mm:ss");
    res.render("order", {
      title: "Tạo mới đơn hàng",
      amount: 10000,
      description: desc,
    });
  },
};
