var request = require("request");

var options = {
  method: 'GET',
  url: 'https://webcamstravel.p.rapidapi.com/webcams/list/category=%7Bcategory%7D',
  qs: {lang: 'en', show: 'webcams%3Aimage%2Clocation'},
  headers: {
    'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});