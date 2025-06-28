const express = require("express");
const router = express.Router();
const Url = require("../models/Url");
const shortid = require("shortid");
const redisClient = require("../utils/redisClient");

const BASE_URL = process.env.BASE_URL;

// POST /shorten
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = shortid.generate();

  try {
    let url = await Url.findOne({ longUrl });
    if (url) {
      return res.json({ shortUrl: `${BASE_URL}/${url.shortCode}` });
    }

    url = new Url({ shortCode, longUrl });
    await url.save();
    await redisClient.set(shortCode, longUrl);

    res.json({ shortUrl: `${BASE_URL}/${shortCode}` });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

// GET /:shortCode
router.get("/:shortCode", async (req, res) => {
  const { shortCode } = req.params;

  try {
    let longUrl = await redisClient.get(shortCode);

    if (!longUrl) {
      const url = await Url.findOne({ shortCode });
      if (!url) return res.status(404).json("Not Found");

      longUrl = url.longUrl;
      await redisClient.set(shortCode, longUrl);
    }

    res.redirect(longUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
