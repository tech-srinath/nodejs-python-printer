var fs = require('fs')
var Printer = require('ipp-printer')
const ptp = require('pdf-to-printer');

var defP;

const datafn = (data) => {
  defP = data;

  t();
}

ptp
  .getDefaultPrinter()
  .then(datafn)
  .catch(console.error())

const t = () => {
  const pdfname = './invoice.pdf';
  var printer = new Printer(defP)

  printer.on('job', function (job) {
    console.log('[job %d] Printing document: %s', job.id, job.name)

    var filename = 'job-' + job.id + '.ps' // .ps = PostScript
    var file = fs.createWriteStream(filename)

    job.on('end', function () {
      console.log('[job %d] Document saved as %s', job.id, filename)
    })

    job.pipe(file)
  })
  ptp
    .print(pdfname)
    .then(console.log)
    .catch(console.error);
}

