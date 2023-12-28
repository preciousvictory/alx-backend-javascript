import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path)
      .then((students) => {
        console.log(students);
	response.status(200).send(students);
      })
      .catch((error) => {
	 response.status(500).send(error);
      });
  }

  static getAllStudentsByMajor((request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    readDatabase(path)
      .then((students) => {
        console.log(students);
        response.status(200).send(students);
      })
      .catch((error) => {
         response.status(500).send(error);
      });
}

export default StudentsController;
module.exports = StudentsController;
