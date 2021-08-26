const request = require('request');

// const breedName = process.argv[2];
const host = 'https://api.thecatapi.com/';
const path = 'v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {

  request(host + path + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
 

    if (response.statusCode === 404 || data.length === 0) {
      // console.log();
      callback('Error: Breed not found', null);
      return;
    }
  
    callback(null, data[0]['description']);
  });

};


module.exports = { fetchBreedDescription };