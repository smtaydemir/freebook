var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');
var emoji = require('node-emoji');
var packpubDomain = 'https://packtpub.com';

request('https://packtpub.com/packt/offers/free-learning', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
  } else {
    console.log(emoji.get('skull') + "  " + colors.red.bold("Snap!"));
    console.log("Freebook.js can't get the book from packpub "+emoji.get('cry'));
    console.log("\t");
    
    if(error !== null) console.log(error);
    if(response) console.log("Status Code : " + response.statusCode);

    process.exit(1);
  }

  var title       = $('.dotd-title h2').text().trim();
  var desc        = $('.dotd-main-book-summary div').eq(2).text().trim() || 'N/A';
  var detailURL   = $('.dotd-main-book-image a').attr('href');

  console.log("\t");
  console.log(emoji.get('books')+ "  " +colors.red.bold(title));
  console.log(colors.white(desc));
  console.log("\t");
  console.log(colors.white('Details\t ') + colors.blue.underline(packpubDomain + detailURL));
  console.log(colors.white('Claim\t ') + colors.blue.underline(packpubDomain + '/packt/offers/free-learning'));
  console.log("\t");
});