export default function getListStudentIds(data) {
  if (!data.isArray) {
    return [];
  }

  let ids = [];
  data.map(student => {
    console.log(student.id)
    ids.push(student.id)
  });
  return ids;
}
