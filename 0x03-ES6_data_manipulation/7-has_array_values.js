export default function hasValuesFromArray(set, array) {
  function isSuperset(set, subset) {
    for (const elem of subset) {
      if (!set.has(elem)) {
        return false;
      }
    }
    return true;
  }
  return isSuperset(set, new Set(array));
}
