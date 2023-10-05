/**
 * Write an interface named Student that accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * Create two students, and create an array named studentsList
 * containing the two variables
 */

const student1: Student = {
  firstName: 'Victory',
  lastName: 'Abiodun-Omoniyi',
  age: 10,
  location: 'Nigeria',
}
const student2: Student = {
  firstName: 'Precious',
  lastName: 'Victory',
  age: 10,
  location: 'Lagos',
}
const studentsList: Array<Student> = [
  student1,
  student2,
];

/**
 * - Using Vanilla Javascript, render a table and for each elements in the array,
 * append a new row to the table
 * 
 * - Each row should contain the first name of the student and the location
 * @param students The list of students to display
 */

const renderAllStudent = (studentsList: Array<Student>): void => {
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', bodyRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderAllStudent(studentsList);
