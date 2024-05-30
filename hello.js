// Import the module using ES Module syntax
import LinkedInPdfToJson from 'linkedin-pdf-to-json';
import chalk from 'chalk';
import path from 'path';

console.log('Hello World!');

// Create a new instance of LinkedInPdfToJson
const linkedinPdfToJson = new LinkedInPdfToJson();

// Define file paths directly
const inputFilePath = "jdoe.pdf";
const outputFilePath = "data.json";
const options = {
  space: 4  // Define the space for JSON formatting directly here
};

// Run the conversion function from the library
linkedinPdfToJson.run(inputFilePath, outputFilePath, options);
