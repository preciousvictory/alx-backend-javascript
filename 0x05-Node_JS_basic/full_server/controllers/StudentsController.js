import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path)
      .then((students) => {
        const responseText = ['This is the list of our students'];
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
          }).map((student) => { return [student[0]].join(',') });
          responseText.push(`rumber of students in ${field}: ${person.length}. List: ${person.join(', ')}`);
          // eslint-disable-next-line no-use-before-define
        });
	response.status(200).send(responseText.join('\n'));
      })
      .catch((err) => {
	 response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

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
      .catch((err) => {
         response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
