var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./invoice.html', 'utf8');
var options = { format: 'letter' };

pdf.create(html, options).toFile('./invoice-5.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});