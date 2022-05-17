const connection = require('./connection');

const helper1 = require('./helper1');

console.log('test', helper1.connection === connection);