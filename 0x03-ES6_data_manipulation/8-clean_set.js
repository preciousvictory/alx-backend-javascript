export default function cleanSet(set, startString) {
  const like = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      like.push(value.split(startString)[1]);
    }
  }
  return like.join('-');
}
