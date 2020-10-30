var lp = require("node-lp");
var options = {};

printer = lp();

printer.queue("invoice-2.pdf", (err) => {
    if (err) throw err;
});