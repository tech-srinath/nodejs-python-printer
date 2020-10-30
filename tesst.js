const fs = require('fs');
var align = require('align-text');
const table = require('table')
var repeat = require('repeat-string');
var longest = require('longest');
var wrap = require('word-wrap');

var str = 'Priyapetta gopik, eda sughamano? ninak roninaksile salary kitiyo?';

var text = wrap(str, { width: 50, indent: ' ' });
var lines = text.split('\n');
var max = longest(lines).length;

lines = lines.map(function (line) {
    var diff = max - line.length;
    return '*' + line + repeat(' ', diff) + '*';
});

var stars = repeat('*', lines[0].length);
var res = stars + '\n'
    + lines.join('\n') + '\n'
    + stars;

// console.log(res);
fs.writeFile("test.txt", res, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


var child_process = require('child_process');
child_process.exec('print test.txt', (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
});