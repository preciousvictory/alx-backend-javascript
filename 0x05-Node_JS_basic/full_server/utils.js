const fs = require('fs');

const readDatabase = (Path) => new Promise((resolve, reject) => {
  fs.readFile(Path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const rows = data.trim().split('\n');
      rows.shift();
      const students = [];
      rows.forEach((row) => {
        students.push(row.split(','));
      });
      // console.log('Number of students: %s', students.length)
      resolve(students);
    }
  });
});

module.exports = readDatabase;
