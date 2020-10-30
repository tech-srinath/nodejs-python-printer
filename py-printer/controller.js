var fs = require('fs');
const { spawn } = require('child_process')

module.exports.createTxt = async (req, res, next) => {
    try {
        var xPosition = 'Eda thoufi....'; // Generate this
        var fileName = 'tmp.txt';

        fs.writeFileSync(fileName, xPosition);
        printWPython(fileName)
        next()
    } catch (error) {
        console.error()
    }

}
printWPython = (fileName) => {
    var pyData = [];
    const python = spawn('python', ['third.py', '123.txt']);
    python.stdout.on('data', data => {
        console.log('Pipe data from python script ...');
        pyData.push(data)
        console.log(pyData)
    });

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
    });


}
