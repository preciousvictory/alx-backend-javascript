/**
 *  returns the sum of all the student ids.
 *  @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accumulator, currentValue) => accumulator + currentValue.id, 
      0,
    );
  }

  return 0;
}
