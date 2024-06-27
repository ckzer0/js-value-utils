import { isPlainObject } from "../misc.ts";

// TODO: add test cases for other misc functions

// Example usage:
console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(new Set())); // false
console.log(isPlainObject(null)); // false
