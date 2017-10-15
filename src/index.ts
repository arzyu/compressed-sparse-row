import { generateArray } from "./util";

type CSR = [number[], number[], number[], number[]];

export default {
  compress(matrix: number[][]): CSR {
    const shape = [matrix.length, matrix[0].length];
    const rowOffsets: number[] = [];
    const columnIndices: number[] = [];
    const values: number[] = [];

    matrix.forEach((row, i) => {
      rowOffsets.push(values.length);
      row.forEach((value, j) => {
        if (value) {
          columnIndices.push(j);
          values.push(value);
        }
      });
    });
    rowOffsets.push(values.length);

    return [shape, rowOffsets, columnIndices, values];
  },

  decompress(csr: CSR): number[][] {
    const [shape, rowOffsets, columnIndices, values] = csr;
    const matrix: number[][] = generateArray(shape[0], () => generateArray(shape[1]));

    let i = 0;

    values.forEach((value, valueIndex) => {
      const j = columnIndices[valueIndex];
      const rowOffset = rowOffsets[i + 1];

      if (valueIndex === rowOffset) {
        i++;
      }

      matrix[i][j] = value;
    });

    return matrix;
  }
};
