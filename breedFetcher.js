const request = require('request');

const arg = process.argv.slice(2);
const host = 'https://api.thecatapi.com/';
const path = 'v1/breeds/search?q=';

request(host + path + arg[0], (error, response, body) => { 
  if (error) {
    console.log('Error:',error);
    return;
  }
  const data = JSON.parse(body);

  if (response.statusCode === 404 || data.length === 0) {
    console.log('Error: Breed not found');
    return;
  }
  console.log(data[0]['description']);
});
