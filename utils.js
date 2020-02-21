export const forEach = (cb, array) => array.forEach(cb);
export const append = (value, array) => [...array, value];
export const withoutOne = (value, array) => array.filter(v => v !== value);
