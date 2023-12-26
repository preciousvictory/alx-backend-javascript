const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const rows = data.split('\n');
    rows.shift();
    const students = [];
    for (let i = 0; i < rows.length; i + 1) {
      students.push(rows[i].split(','));
    }

    console.log('Number of students: %s', students.length);
    const fields = [];
    for (let i = 0; i < students.length; i + 1) {
      const student = students[i];
      if (!fields.includes(student[student.length - 1])) {
        fields.push(student[student.length - 1]);
      }
    }

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
  } catch (err) {
    throw new Error('Cannot load the database');
    // console.error(err);
  }
}

module.exports = countStudents;
