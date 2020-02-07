const express = require("express");
const data = require("./data.json");

const apis = () => {
  const router = express.Router();

  router.get("/api/data", async (req, res) => {
    try {
      return res.json({ success: true, payload: data });
    } catch (error) {
      return res.json({ success: false, payload: {} });
    }
  });

  return router;
};

module.exports = apis;
