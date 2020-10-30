const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('511.pdf');

pdf(dataBuffer).then(function (data) {
    // use data
    fs.writeFile('sam.txt', data, 'utf8')
})
    .catch(function (error) {
        // handle exceptions
    })