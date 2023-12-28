import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path)
      .then((students) => {
        const responseText = ['This is the list of our students']

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
            responseText.push(`Number of students in ${field}: ${person.length}. List: ${person.join(', ')}`);
        });
	response.status(200).send(responseText.join('\n'));
      })
      .catch((error) => {
	 response.status(500).send(error);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    readDatabase(path)
      .then((students) => {
	const fields = [];
        students.forEach((student) => {
          if (!fields.includes(student[student.length - 1])) {
            fields.push(student[student.length - 1]);
          }
        });

        const fieldName = {};
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
	console.log(fieldName);

	const majorNames = fieldName[major].join(', ');

        response.status(200).send(`List: ${majorNames}`);
      })
      .catch((error) => {
         response.status(500).send('Major parameter must be CS or SWE');
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
