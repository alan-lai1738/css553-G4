import LinkedInPdfToJson from "linkedin-pdf-to-json";

console.log('Hello World!');
var linkedinPdfToJson = new LinkedInPdfToJson();
const inputFilePath = "jdoe.pdf";
const outputFilePath = "output/data.json";
const data = linkedinPdfToJson.run(inputFilePath, outputFilePath);

