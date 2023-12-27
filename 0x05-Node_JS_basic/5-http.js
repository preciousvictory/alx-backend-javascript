const http = require('http');
const fs = require('fs');
const process = require('process');

const hostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  else if (url === '/students') {
    response = ['This is the list of our students'];
    try {
      const report = countStudents(process.argv[2], response);
      const responseText = report.join('\n');
      //console.log(report);
      res.write(Buffer.from(responseText));
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
