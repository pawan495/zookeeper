const express = require('express');
const app = express();
const { animals } = require('./data/animals.json');

app.get('/api/animals', (req, res) => {
    let results = animals;
  console.log(req.query)
  res.json(results);
});
function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
  }
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
