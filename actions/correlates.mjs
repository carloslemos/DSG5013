import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const jsonPath = path.join(process.cwd(), './src/data/output.json');
const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const csvPath = path.join(process.cwd(), './src/data/relations_by_index.csv');
const outputPath = path.join(process.cwd(), './src/data/data.json');

jsonData.forEach(element => {
    element.relations = new Array();
    element.topicos = element.topicos.split(',');
});

fs.createReadStream(csvPath)
  .pipe(csv())
  .on('data', row => {
    const source = Number(row.source);
    const target = Number(row.target);
    const weight = Number(row.weight);

    jsonData[source].relations.push({target, weight})
  })
  .on('end', () => {
    fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
    console.log("Arquivo gerado:", outputPath);
  });
