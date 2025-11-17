import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

function toSnakeCase(str) {
  return str
    .normalize('NFD')                   // separa acentos
    .replace(/[\u0300-\u036f]/g, '')    // remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')        // tudo que não for alfanumérico vira _
    .replace(/^_+|_+$/g, '');           // remove _ no início/fim
}

const results = [];

const inputPath = path.join(process.cwd(), './src/data/data.csv');
const outputPath = path.join(process.cwd(), './src/data/output.json');

fs.createReadStream(inputPath)
  .pipe(csv({
    mapHeaders: ({ header }) => toSnakeCase(header)
  }))
  .on('data', (row) => results.push(row))
  .on('end', () => {
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log('CSV convertido com headers snake_case.');
  });