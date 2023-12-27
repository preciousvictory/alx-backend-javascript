const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (Path, response) => {
  if (!fs.existsSync(Path)) {
    //throw new Error('Cannot load the database');
    return response;
  } else {
    const data = fs.readFileSync(Path, 'utf-8');
    const rows = data.trim().split('\n');
    rows.shift(1);
    const students = [];
    rows.forEach((row) => {
      students.push(row.split(','));
    });
    response.push(`Number of students: ${students.length}`);

    const fields = [];
    students.forEach((student) => {
      if (!fields.includes(student[student.length - 1])) {
        fields.push(student[student.length - 1]);
      }
    });

    fields.forEach((field) => {
      const person = students.filter((student) => {
        if (student[student.length - 1] === field) {
          return student;
        }
      }).map((student) => {return [student[0]].join(",")});
      response.push(`Number of students in ${field}: ${person.length}. List: ${person.join(', ')}`);
    });
  }
  return response;
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  response = ['This is the list of our students'];
  try {
    const report = countStudents(process.argv[2], response);
    const responseText = report.join('\n');
    //console.log(report);
    res.send(responseText);
    res.end();
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});

module.exports = app;
