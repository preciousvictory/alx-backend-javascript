const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

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
        const person = students.filter((student) => {
          if (student[student.length - 1] === field) {
            return student;
          }
        }).map((student) => return [student[0]].join(","))
        console.log('Number of students in %s: %d. List: %s', field, person.length, person.join(', '));
      });
      resolve(true);
    }
  });
});

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2]);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
