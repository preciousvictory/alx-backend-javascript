export default function cleanSet(set, startString) {
  const like = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const endStr = value.substring(startString.length);
      if (endStr && endStr !== value) {
        like.push(endStr);
      }
    }
  }
  return like.join('-');
}
