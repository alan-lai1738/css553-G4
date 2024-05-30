/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable unicorn/prefer-blob-reading-methods */
import { promises as fs } from "node:fs";
// import { PDFDocument } from "pdf-lib";
// import Schema from "./schema";
// import { PDFSchema } from "./schema";
import { Schema } from "zod";
import { Parser } from "../interfaces/parser";
import { PDFResume, PDFSchema } from "./schema";
// import { Json } from "jsonfile";
import LinkedInPdfToJson from "linkedin-pdf-to-json";



// import { pdfResumeSchema } from "./schema";
// import PDFParser from "pdf2json";

// TODO: Plug the interface back in later
// export class PDFParser implements Parser<File, PDFResume> {
  export class PDFParser  {
  schema: Schema;

  constructor() {
    // Initialization if needed
    this.schema = PDFSchema;
  }

 

  // Method to read a PDF from a File object in the browser
  async readFile(fileName: File): Promise<JSON> {
    var linkedinPdfToJson = new LinkedInPdfToJson();
    const inputFilePath = fileName;
    const outputFilePath = "temp/data.json";
    const options = {
      space: 4  // Define the space for JSON formatting directly here
    };
    const data = linkedinPdfToJson.run(inputFilePath, outputFilePath, options);
    // Read the JSON file created by the LinkedInPdfToJson library
    const jsonData = await fs.readFile(outputFilePath, { encoding: 'utf8' });

    // Parse the JSON string back into an object to return
    return JSON.parse(jsonData);
  }
}



export default PDFParser;
