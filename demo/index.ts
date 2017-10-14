import csr from "../src/index";
import { generateArray } from "../src/util";

const generateRandomValue = () => Math.random() > 0.5 ? Math.floor(10 * Math.random()) + 1 : 0;

const matrix = generateArray(9, () => generateArray(9, generateRandomValue));

const csrCompressedResult = csr.compress(matrix);

const csrDecompressedResult = csr.decompress(csrCompressedResult);

console.log(`\nmatrix:\n${JSON.stringify(matrix)}`);
console.log(`\ncsr compressed result:\n${JSON.stringify(csrCompressedResult)}`);
console.log(`\ncsr decompressed result:\n${JSON.stringify(csrDecompressedResult)}`);
