const express = require("express");
const router = express.Router();
const viewRouter = require("./view.router");
const vnpayRouter = require("./vnpay.router");

const defaultRoutes = [
  {
    path: "/",
    route: viewRouter,
  },
  {
    path: "/order",
    route: vnpayRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
