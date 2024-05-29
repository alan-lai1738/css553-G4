/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable unicorn/prefer-blob-reading-methods */
// import { promises as fs } from "node:fs";

import * as fs from "node:fs";

// import { PDFDocument } from "pdf-lib";
// import Schema from "./schema";
// import { PDFSchema } from "./schema";
import { Schema } from "zod";
import { PDFResume, PDFSchema } from "./schema";



// import { pdfResumeSchema } from "./schema";
// import PDFParser from "pdf2json";

// TODO: Plug the interface back in later
class PDFParser {
  schema: Schema;

  constructor() {
    // Initialization if needed
    this.schema = PDFSchema;
  }

 

  // Method to read a PDF from a File object in the browser
  async readFile(file: File): Promise<PDFDocument> {
    try {
      //const fileAsBytes = await this.fileToUint8Array(file);
      // This is a minimal valid PDF in a hexadecimal string
      const minimalPDFHex =
        "255044462D312E330D0A312030206F626A0D3C3C2F57696474682032203020520D2F48656967687420332030..." +
        "20520D2F547970652034203020520D2F537562747970652035203020520D2F46696C7465722036203020520D2F436F6C6F72537061636520372030..." +
        "20520D2F4C656E6774682038203020520D3E3E0D73747265616D0D0A2E2E2E62696E617279206461746120686572652E2E2E0D0A656E6473747265616D0D656E..." +
        "646F626A0D747261696C65720D3C3C2F526F6F742031203020520D2F53697A6520393E3E0D2525454F460D";

      // Convert the hex string to a Uint8Array
      const pdfBytes = new Uint8Array(
        minimalPDFHex.match(/[\da-f]{2}/gi).map((h) => Number.parseInt(h, 16)),
      );
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pdfBytesOut = await pdfDoc.save();
      // await fs.writeFile("pdf_file_test/", pdfBytesOut);
      await this.savePDFToFile("pdf_file_test/", pdfBytesOut);
    } catch (error) {
      console.error("Error reading PDF file:", error);
      throw error;
    }
  }

  async savePDFToFile(filePath: string, pdfBytes: Uint8Array) {
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pdfBytesOut = await pdfDoc.save();
    fs.writeFile(filePath, pdfBytesOut, (err) => {
      if (err) {
        console.error("Error writing to file", err);
      } else {
        console.log("File has been written successfully");
      }
    });
  }
}

export default PDFParser;
