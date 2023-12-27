const fs = require('fs');

const countStudents = (Path) => new Promise((resolve, reject) => {
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

      console.log('Number of students: %s', students.length);

      const fields = [];
      students.forEach((student) => {
        if (!fields.includes(student[student.length - 1])) {
          fields.push(student[student.length - 1]);
        }
      });

      fields.forEach((field) => {
        let person = students.filter((student) => {
          if (student[student.length - 1] == field) {
            return student;
          }
        }).map((student) => {
    	  return [student[0]].join(",");
        });
        console.log('Number of students in %s: %d. List: %s', field, person.length, person.join(', '));
      });
      resolve(true);
    }
  });
});

module.exports = countStudents;
