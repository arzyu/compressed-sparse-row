# Compressed Sparse Row

## Installation

```bash
yarn add compressed-sparse-row
```

## Usage

```javascript
import csr from "compressed-sparse-row";

const matrix = [
  [1, 7, 0, 0],
  [0, 2, 8, 0],
  [5, 0, 3, 9],
  [0, 6, 0, 4]
];

const compressed = csr.compress(matrix);

console.log(JSON.stringify(compressed));
// [[4,4],[0,2,4,7,9],[0,1,1,2,0,2,3,1,3],[1,7,2,8,5,3,9,6,4]]
// [shape, rowOffsets, columnIndices, values]

const originMatrix = csr.decompress(compressed);

console.log(JSON.stringify(originMatrix));
// [[1,7,0,0],[0,2,8,0],[5,0,3,9],[0,6,0,4]]

```

## Reference

[Sparse Matrix Storage Formats](http://www.bu.edu/pasi/files/2011/01/NathanBell1-10-1000.pdf) [page 11]
