export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    const added = students.map((student) => {
      const grades = newGrades.filter((grades) => student.id === grades.studentId);
      const value = grades[0] ? grades[0].grade : 'N/A';

      return {...student, 'grade' : value}
    });
    return added.filter((student) => student.location === city)
  }
  return [];
}
