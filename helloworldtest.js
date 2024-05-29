const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", (errData) => 
    console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
    fs.writeFile(
        "test.json",
        JSON.stringify(pdfData),
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File successfully written!');
            }
        }
    );
});

pdfParser.loadPDF("test.pdf");
