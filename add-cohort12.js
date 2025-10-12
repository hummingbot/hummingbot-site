const fs = require('fs');
const { parse } = require('csv-parse/sync');
const { stringify } = require('csv-stringify/sync');

// Cohort 12 participants from database
const cohort12Members = [
  { name: 'Aleksandr Kigelman', slug: 'aleksandr-kigelman' },
  { name: 'Alexia Quan', slug: 'alexia-quan' },
  { name: 'Andreas', slug: 'andreas' },
  { name: 'Artur Gaio', slug: 'artur-gaio' },
  { name: 'Calvin', slug: 'calvin' },
  { name: 'Cezar Crintea', slug: 'cezar-crintea' },
  { name: 'Chris Daplit', slug: 'chris-daplit' },
  { name: 'Christian Schroer', slug: 'christian-schroer' },
  { name: 'Garrett Parker', slug: 'garrett-parker' },
  { name: 'Gautam Yashwardhan', slug: 'gautam-yashwardhan' },
  { name: 'Greg Gompers', slug: 'greg-gompers' },
  { name: 'Guilherme D\'Orey', slug: 'guilherme-dorey' },
  { name: 'James Lo Tsz', slug: 'james-lo-tsz' },
  { name: 'Jay Coulter', slug: 'jay-coulter' },
  { name: 'Jonathan Gould', slug: 'jonathan-gould' },
  { name: 'Joris Zierold', slug: 'joris-zierold' },
  { name: 'Joseph Ho', slug: 'joseph-ho' },
  { name: 'Kevin Chon', slug: 'kevin-chon' },
  { name: 'Lautaro', slug: 'lautaro' },
  { name: 'Loo Yin Ng', slug: 'loo-yin-ng' },
  { name: 'Martin Sigwald', slug: 'martin-sigwald' },
  { name: 'Matt Alencar', slug: 'matt-alencar' },
  { name: 'Max Gnesi', slug: 'max-gnesi' },
  { name: 'Nikhil', slug: 'nikhil' },
  { name: 'Nishant Satyarthy', slug: 'nishant-satyarthy' },
  { name: 'Ortal Raz', slug: 'ortal-raz' },
  { name: 'Pasha', slug: 'pasha' },
  { name: 'Tan Wei Guang', slug: 'wei-guang-tan' },
  { name: 'Todd Griggs', slug: 'todd-griggs' },
  { name: 'Tri', slug: 'tri' },
  { name: 'Vincent', slug: 'vincent' }
];

const csvPath = './docs/certification/Botcamp Members Database - Certified.csv';

// Read the existing CSV
const fileContent = fs.readFileSync(csvPath, 'utf-8');
const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});

// Add cohort 12 members
const newRecords = cohort12Members.map(member => ({
  Name: member.name,
  Cohort: 'Cohort 12 - Sep 2025',
  Certification: `<https://www.botcamp.xyz/members/${member.slug}>`
}));

// Combine existing and new records
const allRecords = [...records, ...newRecords];

// Write back to CSV
const output = stringify(allRecords, {
  header: true,
  columns: ['Name', 'Cohort', 'Certification']
});

fs.writeFileSync(csvPath, output);

console.log(`Added ${newRecords.length} cohort 12 members to the CSV!`);
console.log(`Total records: ${allRecords.length}`);
