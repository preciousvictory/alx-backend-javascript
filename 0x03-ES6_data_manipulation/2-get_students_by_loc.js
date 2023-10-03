export default function getStudentsByLocation(students, city) {
  const result = students.filter((student) => student.city == city)
  return result;
}
