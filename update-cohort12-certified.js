const fs = require('fs');
const { parse } = require('csv-parse/sync');
const { stringify } = require('csv-stringify/sync');

// Only certified cohort 12 members (those with strategies)
const certifiedCohort12Members = [
  { name: 'Alexia Quan', slug: 'alexia-quan' },
  { name: 'Christian Schroer', slug: 'christian-schroer' },
  { name: 'James Lo Tsz', slug: 'james-lo-tsz' },
  { name: 'Joris Zierold', slug: 'joris-zierold' },
  { name: 'Loo Yin Ng', slug: 'loo-yin-ng' },
  { name: 'Max Gnesi', slug: 'max-gnesi' },
  { name: 'Pasha', slug: 'pasha' },
  { name: 'Todd Griggs', slug: 'todd-griggs' },
  { name: 'Tri', slug: 'tri' }
];

const csvPath = './docs/certification/Botcamp Members Database - Certified.csv';

// Read the existing CSV
const fileContent = fs.readFileSync(csvPath, 'utf-8');
const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});

// Remove all Cohort 12 entries
const filteredRecords = records.filter(record => !record.Cohort.includes('Cohort 12'));

console.log(`Removed ${records.length - filteredRecords.length} Cohort 12 entries`);

// Add certified cohort 12 members
const newRecords = certifiedCohort12Members.map(member => ({
  Name: member.name,
  Cohort: 'Cohort 12 - Sep 2025',
  Certification: `<https://www.botcamp.xyz/members/${member.slug}>`
}));

// Combine existing and new records
const allRecords = [...filteredRecords, ...newRecords];

// Write back to CSV
const output = stringify(allRecords, {
  header: true,
  columns: ['Name', 'Cohort', 'Certification']
});

fs.writeFileSync(csvPath, output);

console.log(`Added ${newRecords.length} certified cohort 12 members to the CSV!`);
console.log(`Total records: ${allRecords.length}`);
