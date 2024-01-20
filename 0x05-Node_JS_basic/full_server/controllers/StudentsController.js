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
	    return; // eslint-disable-line
          }).map((student) => { return [student[0]].join(',') }); // eslint-disable-line
          responseText.push(`Number of students in ${field}: ${person.length}. List: ${person.join(', ')}`);
          return; // eslint-disable-line
        });
	response.status(200).send(responseText.join('\n')); // eslint-disable-line
      })
      .catch((err) => {
	 response.status(500).send(err instanceof Error ? err.message : err.toString()); // eslint-disable-line
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
	const fields = []; // eslint-disable-line
        students.forEach((student) => {
          if (!fields.includes(student[student.length - 1])) {
            fields.push(student[student.length - 1]);
          }
        });

        const fieldName = {};
        fields.forEach((field) => {
          let person = []; // eslint-disable-line
          for (const i in students) { // eslint-disable-line
            const student = students[i];
            if (student[student.length - 1] === field) {
              person.push(student[0]);
            }
          }
          fieldName[field] = person;
        });
	console.log(fieldName); // eslint-disable-line

	const majorNames = fieldName[major].join(', '); // eslint-disable-line

        response.status(200).send(`List: ${majorNames}`);
      })
      .catch((err) => {
         response.status(500).send(err instanceof Error ? err.message : err.toString());  // eslint-disable-line
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
