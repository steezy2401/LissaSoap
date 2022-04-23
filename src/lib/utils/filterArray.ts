const filterArray = (arr: string[], val: string) => {
  if (arr.length == 0) return [val];
  if (arr.includes(val))
    return arr.filter(function (value) {
      return value != val;
    });
  return [...arr, val];
};

export { filterArray };
