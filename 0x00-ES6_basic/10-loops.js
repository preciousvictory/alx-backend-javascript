export default function appendToEachArrayValue(array, appendString) {
  const nArray = [];
  for (const value of array) {
    nArray.push(appendString + array[array.indexOf(value)]);
  }
  return nArray;
}
