const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'The Book List' });
});

router.get("/healthz", (req, res) => {
  res.status(200).send("OK")
})

module.exports = router;
