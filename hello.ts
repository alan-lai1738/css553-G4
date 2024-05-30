import PDFParser from "./pdf-import/index";


async function testReadFile() {
    const parser = new PDFParser();

    const result = await parser.readFile("SophiaFeng.pdf");
    console.log('Parsed JSON Data:', result);
}

testReadFile();

