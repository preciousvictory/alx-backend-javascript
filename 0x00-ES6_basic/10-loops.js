export default function appendToEachArrayValue(array, appendString) {
  const nArray = [];
  for (const value of array) {
    nArray.push(appendString + value);
  }
  return nArray;
}
