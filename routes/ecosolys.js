const { jokerModel } = require('../modules/jokers');

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const listJoker = await jokerModel.find({});
    res.status(200).send(listJoker);
  } catch (error) {
    res.send(error);
  }
});

//Change data from id
//Etapa 2
router.patch('/restart', async (req, res, next) => {
  try {
    //const msg = req.body;
    const { name } = req.body;
    const joker = await jokerModel.findOneAndUpdate(
      { name: name },
      { lastJoke: new Date(Date.now()) },
      { new: 1 }
    );
    console.log(joker);
    res.status(200).send(joker);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
