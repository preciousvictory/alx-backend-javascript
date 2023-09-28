export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === "string") {
      this._name = name;
    } else {new Error("TypeError: Name must be a string")}
    if (typeof length === "number") {
      this._length =  length;
    } else {new Error("TypeError: Length must be a number")}
    this._students = students;
  }


  get name() {
    return this._name;
  }
  set name(x) {
    if (typeof name === "string") {
      this._name = x;
    } else {new Error("TypeError: Name must be a string")}
  }

  get length() {
    return this._length;
  }
  set length(x) {
    if (typeof length === "number") {
      this._length =  length;
    } else {new Error("TypeError: Length must be a number")}
  }

  get students() {
    return this._students;
  }
  set students(x) {
    this._students = x;
  }
}
