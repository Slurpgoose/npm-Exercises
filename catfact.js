const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const catFacts = require('cat-facts');

const HOME_DIR = require('os').homedir()
const file = path.join(HOME_DIR, 'Desktop', 'backgrounds', 'facts', 'catfacts.pdf');


const doc = new PDFDocument();
doc.pipe(fs.createWriteStream(file));

function getFact(){
    let randomFact = catFacts.random()
    writeFact(randomFact);
}

function writeFact(fact) {
    doc.fontSize(19)
   .text(fact, 100, 100);
   closedoc()
}

function closedoc(){
    doc.save()
    doc.end()
}


getFact()