const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser();


var linkedinPdfToJson = new LinkedInPdfToJson();
const inputFilePath = fileName;
const outputFilePath = "output/data.json";
const data = linkedinPdfToJson.run(inputFilePath, outputFilePath);
