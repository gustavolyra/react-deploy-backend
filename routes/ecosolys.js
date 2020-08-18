var express = require('express');
var router = express.Router();
const jsonFile = require('../helpers/jsonHandler');
const { getJson } = jsonFile;
/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-Width, Content-Type, Accept'
  );
  try {
    const json = await getJson();
    res.send(json.jokers);
  } catch (error) {
    res.send(error);
  }
});

//Change data from id
//Etapa 2
router.put('/:id', async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-Width, Content-Type, Accept'
  );
  try {
    //const msg = req.body;
    const id = parseInt(req.params.id);
    res.status(200).send('sucesso');
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
