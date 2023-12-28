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
      // console.log('Number of students: %s', students.length);

      const fields = [];
      students.forEach((student) => {
        if (!fields.includes(student[student.length - 1])) {
          fields.push(student[student.length - 1]);
        }
      });

      fieldName = {}
      fields.forEach((field) => {
	let person = [];
        for (const i in students) {
	  const student = students[i];
	  if (student[student.length - 1] == field) {
	    person.push(student[0]);
	  }
        }
	fieldName[field] = person;
      });
      resolve(fieldName);
    }
  });
});

module.exports = readDatabase;
