// import { promises as fs, read } from 'fs';
const fs = require('fs').promises;
const { readFile, writeFile } = fs;

async function getJson() {
  console.log(global.fileJson);
  const data = await readFile(global.fileJson);
  const json = JSON.parse(data);
  return json;
}

module.exports = {
  getJson,
};
