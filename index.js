var request = require('request');
var colors = require('colors');
var emoji = require('node-emoji');

request('https://www.kimonolabs.com/api/96pg5di8', function (error, response, body) {
    if (!error && response.statusCode == 200)
		var content = JSON.parse(body.trim());

    var bookTitle = content.results.collection1[0].property1;
    var bookDesc  = content.results.collection1[0].property2;

    console.log("\t");
    console.log(emoji.get('books')+ "  " +colors.red.bold(bookTitle));
    console.log(colors.blue.underline("https://www.packtpub.com/packt/offers/free-learning"));
    console.log("\t");
});
