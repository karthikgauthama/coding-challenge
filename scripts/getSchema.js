const fetch = require('node-fetch');
const fs = require('fs');
const { config } = require('../src/config/graphql.js');

fetch(config.schema)
  .then((res) => {
    let body = '';

    console.log('Getting schema from ' + config.schema);

    res.body.on('data', chunk => body += chunk);
    res.body.on('end', () => {
      fs.writeFileSync('schema.graphql', body.toString());

      console.log('Schema was fetched');
    });
  }).catch(e => console.log(e));
