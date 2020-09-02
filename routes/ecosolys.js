const { jokerModel } = require('../modules/jokers');

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
  try {
    const listJoker = await jokerModel.find({});
    res.status(200).send(listJoker);
  } catch (err) {
    res.send(err);
  }
});

//Change data from name
router.patch('/restart', async (req, res) => {
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

//Reset everyone
router.patch('/restartAll', async (req, res) => {
  try {
    const allJokers = await jokerModel.update(
      {},
      [{ $set: { lastJoke: new Date(Date.now()), record: 0 } }],
      { multi: true }
    );
    res.status(200).send(allJokers);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
