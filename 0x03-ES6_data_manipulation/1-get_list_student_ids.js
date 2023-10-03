export default function getListStudentIds(data) {
  if (!Array.isArray(data)) {
    return [];
  }
  let ids = [];
  data.map(student => {
    ids.push(student.id)
  });
  return ids;
}
