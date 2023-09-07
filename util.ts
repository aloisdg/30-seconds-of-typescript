export type Predicate = (...item: any[]) => boolean;

export type Func<T = any> = (...args: T[]) => any;

export type MapFunc<T = any, R = any> = (
  val: T,
  index?: number,
  arr?: T[]
) => R;

export type AnyObject = { [key: string | number]: any };

export type SortOrder = 1 | -1;

export interface IEventListener {
  addEventListener: (event: string, fn: Func) => void;
}

export interface HTMLElementLike {
  style: AnyObject;
  dispatchEvent?: Function;
}

export interface IElement {
  type: string;
  props?: IElementProps;
}

export interface IElementProps {
  type: string;
  nodeValue?: string;
  className?: string;
  onClick?: Function;
  children?: IElement[];
  [key: string]: any;
}

export interface ArrayLike {
  entries(): IterableIterator<any>;
}

export enum HTMLEscapeChars {
  "&" = "&amp;",
  "<" = "&lt;",
  ">" = "&gt;",
  "'" = "&#39;",
  '"' = "&quot;",
}
export enum HTMLUnEscapeChars {
  "&amp;" = "&",
  "&lt;" = "<",
  "&gt;" = ">",
  "&#39;" = "'",
  "&quot;" = '"',
}

const htmlEscapeReg = new RegExp(
  `[${Object.keys(HTMLEscapeChars).join("")}]`,
  "g"
);

const htmlUnEscapeReg = new RegExp(
  `${Object.keys(HTMLUnEscapeChars).join("|")}`,
  "g"
);

/**
 * Returns an array of partial sums.
 * Use `Array.prototype.reduce()`, `Array.prototype.slice(-1)` and the unary `+` operator to add each value to the unary array containing the previous sum.
 *
 * @param nums {number[]} array of numbers
 */
export const accumulate = (...nums: number[]): number[] =>
  nums.reduce((acc: number[], n) => [...acc, n + +acc.slice(-1)], []);

/**
 * Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.
 *
 * @param arr:{T[]} <T = any>
 * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
 */
export const all = <T = any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.every(fn);

/**
 * Check if all elements in an array are equal.
 *
 * @param arr {T[]} <T = any>
 */
export const allEqual = <T = any>(arr: T[]) =>
  arr.every((val) => val === arr[0]);

/**
 * Returns `true` if both arguments are `true`, `false` otherwise.
 *
 * @param a {any}
 * @param b {any}
 */
export const and = <T = any>(a: T, b: T) => Boolean(a) && Boolean(b);

/**
 * Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.
 * Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
 * Omit the second argument, `fn`, to use `Boolean` as a default.
 *
 * @param arr:{T[]} <T = any>
 * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
 */
export const any = <T = any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.some(fn);

/**
 * Same as any
 *
 * @param arr:{T[]} <T = any>
 * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
 */
export const some = <T = any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.some(fn);

/**
 * Returns an array of `n`-tuples of consecutive elements.
 *
 * Use `Array.prototype.slice()` and `Array.prototype.map()` to create an array of appropriate length and populate it with `n`-tuples of consecutive elements from `arr`.
 * If `n` is greater than the length of `arr`, return an empty array.
 *
 * @param n
 * @param arr
 */
export const aperture = <T = any>(n: number, arr: T[]) =>
  n >= arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);

/**
 * Checks if two numbers are approximately equal to each other.
 *
 * Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
 * Omit the third parameter, `epsilon`, to use a default value of `0.001`.
 * @param v1 {number}
 * @param v2 {number}
 * @param epsilon {number} default 0.001
 */
export const approximatelyEqual = (
  v1: number,
  v2: number,
  epsilon: number = 0.001
) => Math.abs(v1 - v2) < epsilon;

/**
 * Converts a 2D array to a comma-separated values (CSV) string.
 *
 * Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
 * Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
 * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
 *
 * @param arr {(string | number)[][]}
 * @param delimiter {string} default  ","
 */
export const arrayToCSV = (arr: (string | number)[][], delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");

/**
 * Converts the given array elements into `<li>` tags and appends them to the list of the given id.
 * Use `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.
 *
 * @param arr {(string | number)[]}
 * @param listID {string}
 */
export const arrayToHtmlList = (arr: (string | number)[], listID: string) => {
  let el = document.querySelector("#" + listID);
  if (el) {
    el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
  }
};

/**
 * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
 *
 * Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).
 *
 * @param fn {function} {(...args: T[]) => any}
 * @param n {number}
 */
export const ary =
  <T = any>(fn: (...args: T[]) => any, n: number) =>
  (...args: T[]) =>
    fn(...args.slice(0, n));

// export const atob = (str: string) => Deno.Buffer.from(str, 'base64').toString('binary');

/**
 * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
 *
 * Use a `try... catch` block to return either the result of the function or an appropriate error.
 *
 * @param fn {function} {(...args: any[]) => any}
 * @param args {any[]}
 */
export const attempt = (fn: (...args: any[]) => any, ...args: any[]) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

/**
 * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
 *
 * Use a `try... catch` block to return tuple of value and Error
 *
 * @param fn {function} {(...args: any[]) => any}
 * @param args {any[]}
 *
 * @returns [any, Error]
 */
export const attempt2 = (fn: (...args: any[]) => any, ...args: any[]) => {
  try {
    return [fn(...args), null];
  } catch (e) {
    return [null, e instanceof Error ? e : new Error(e)];
  }
};

/**
 * Returns the average of two or more numbers.
 *
 * Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.
 * @param nums
 */
export const average = <T extends number>(...nums: number[]) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * Returns the average of an array, after mapping each element to a value using the provided function.
 *
 * Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.
 *
 * type NumCollector<T> = (item: T) => number;
 * <T extends unknown>
 *
 * @param arr {T[]}
 * @param fn {NumCollector<T> | string}
 */
type NumCollector<T> = (item: T) => number;
export const averageBy = <T = any>(arr: T[], fn: NumCollector<T> | string) => {
  const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];
  return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
};

/**
 * Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
 *
 * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.
 *
 * @param arr {T[]} , <T = any>
 * @param filter {boolean[]}
 */
export const bifurcate = <T = any>(arr: T[], filter: boolean[]) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[] as T[], [] as T[]]
  );

/**
 * Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.
 *
 * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.
 *
 * @param arr {T[]}, <T = any>
 * @param filter {Predicate<T>}
 */
export const bifurcateBy = <T = any>(arr: T[], filter: Predicate) =>
  arr.reduce(
    (acc, val) => {
      acc[filter(val) ? 0 : 1].push(val);
      return acc;
    },
    [[] as T[], [] as T[]]
  );

/**
 * Creates a function that accepts up to two arguments, ignoring any additional arguments.
 * Call the provided function, `fn`, with the first two arguments given.
 *
 * @param fn {function} {(...args: any[]) => any}
 * @returns {function} ([v1, v2]: any[]) => fn(v1, v2)
 */
export const binary =
  (fn: (...args: any[]) => any) =>
  (...[v1, v2]: any[]) =>
    fn(v1, v2);

/**
 * Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.
 *
 * Return a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.
 * Use `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.
 * @param fn
 * @param context
 * @param boundArgs
 */
export const bind =
  <T = any>(fn: (...args: any[]) => any, context: T, ...boundArgs: any[]) =>
  (...args: any[]) =>
    fn.apply(context, [...boundArgs, ...args]);

/**
 * Binds methods of an object to the object itself, overwriting the existing method
 * Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.
 *
 * @param obj {any}
 * @param fns {string[]}
 */
export const bindAll = (obj: any, ...fns: string[]) =>
  fns.forEach((key: string) => {
    if (typeof obj[key] === "function") {
      const f = obj[key];
      obj[key] = function (...args: any[]) {
        return f.apply(obj, args);
      };
    }
  });

/**
 * Evaluates the binomial coefficient of two integers `n` and `k`.
 *
 * Use `Number.isNaN()` to check if any of the two values is `NaN`.
 * Check if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.
 * Check if `n - k` is less than `k` and switch their values accordingly.
 * Loop from `2` through `k` and calculate the binomial coefficient.
 * Use `Math.round()` to account for rounding errors in the calculation.
 *
 * @param n {number}
 * @param k {number}
 */
export const binomialCoefficient = (n: number, k: number): number => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};

/**
 * Returns `true` if both functions return `true` for a given set of arguments, `false` otherwise.
 * Use the logical and (`&&`) operator on the result of calling the two functions with the supplied `args`.
 *
 * @param f
 * @param g
 */
export const both =
  (f: Function, g: Function) =>
  (...args: any[]) =>
    f(...args) && g(...args);

// TODO: need refactor types

/**
 * Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
 *
 * Use a closure to call a stored key with stored arguments.
 *
 * @param key {string}
 * @param args {any[]}
 */
export const call =
  (key: string, ...args: any[]) =>
  (context: any) =>
    context[key](...args);

/**
 *   Capitalizes the first letter of a string.
 *
 * Use array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
 * Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.
 *
 *
 * @param str {string}
 * @param lowerRest {boolean}
 */
export const capitalize = (str: string = "", lowerRest = false): string =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

/**
 * Capitalizes the first letter of every word in a string.
 * Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.
 *
 * @param str {string}
 */
export const capitalizeEveryWord = (str: string = "") =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

/**
 * Casts the provided value as an array if it's not one.
 *
 * Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.
 * @param val
 */
export const castArray = (val: any): any[] =>
  Array.isArray(val) ? val : [val];

/**
 * Converts Celsius to Fahrenheit.
 * Follows the conversion formula `F =  1.8C + 32`.
 * @param degrees
 */
export const celsiusToFahrenheit = (degrees: number) => 1.8 * degrees + 32;

/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * Use `Array.from()` to create a new array, that fits the number of chunks that will be produced.
 * Use `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.
 * If the original array can't be split evenly, the final chunk will contain the remaining elements.
 *
 * @param arr {any[]}
 * @param size {number}
 */
export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) =>
    arr.slice(i * size, i * size + size)
  );

/**
 * Add special characters to text to print in color in the console (combined with `console.log()`).
 *
 * Use template literals and special characters to add the appropriate color code to the string output.
 * For background colors, add a special character that resets the background color at the end of the string.
 */
export const colorize = new (class {
  color = (code: number, ended = false, ...messages: any[]) =>
    `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
  black = this.color.bind(null, 30, false);
  red = this.color.bind(null, 31, false);
  green = this.color.bind(null, 32, false);
  yellow = this.color.bind(this, 33, false);
  blue = this.color.bind(this, 34, false);
  magenta = this.color.bind(this, 35, false);
  cyan = this.color.bind(this, 36, false);
  white = this.color.bind(this, 37, false);
  bgBlack = this.color.bind(this, 40, true);
  bgRed = this.color.bind(this, 41, true);
  bgGreen = this.color.bind(this, 42, true);
  bgYellow = this.color.bind(this, 43, true);
  bgBlue = this.color.bind(this, 44, true);
  bgMagenta = this.color.bind(this, 45, true);
  bgCyan = this.color.bind(this, 46, true);
  bgWhite = this.color.bind(this, 47, true);
})();

/**
 * Add special characters to text to print in color in the console (combined with `console.log()`).
 *
 * Use template literals and special characters to add the appropriate color code to the string output.
 * For background colors, add a special character that resets the background color at the end of the string.
 */
export const colors = colorize;

// console.log(colorize.black("foo")); // 'foo' (red letters)
// console.log(colorize.bgBlue("foo", "bar")); // 'foo bar' (blue background)
// console.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // 'foo bar' (first

/**
 * Removes falsy values from an array.
 * Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).
 *
 * @param arr {any[]}
 */
export const compact = (arr: any[]) => arr.filter(Boolean);

/**
 * Returns a string with whitespaces compacted.
 * Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.
 *
 * @param str {string}
 */
export const compactWhitespace = (str: string) => str.replace(/\s{2,}/g, " ");

/**
 * Returns a function that is the logical complement of the given function, `fn`.
 *
 * Use the logical not (`!`) operator on the result of calling `fn` with any supplied `args`.
 *
 * @param fn {Func<any>}
 */
export const complement =
  (fn: Func) =>
  (...args: any[]) =>
    !fn(...args);

/**
 * Performs right-to-left function composition.
 *
 * Use `Array.prototype.reduce()` to perform right-to-left function composition.
 * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.
 *
 * @param fns {...fns: Func<any>[]}
 */
export const compose = (...fns: Func[]) =>
  fns.reduce(
    (f, g) =>
      (...args: any[]) =>
        f(...castArray(g(...args)))
  );

/**
 * Performs left-to-right function composition.
 *
 * Use `Array.prototype.reduce()` to perform left-to-right function composition.
 * The first (leftmost) function can accept one or more arguments; the remaining functions must be unary. *
 * @param fns {...fns: Func<any>[]}
 */
export const composeRight = (...fns: Func[]) =>
  fns.reduce(
    (f, g) =>
      (...args: any[]) =>
        g(...castArray(f(...args)))
  );

/**
 * Returns `true` if given string s1 contains s2. Compare is case insensitive.
 *
 *
 * @param str {string}
 */
export const contains = (s1: string, s2: string = "") =>
  s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1;

/**
 * Returns `true` if the given string contains any whitespace characters, `false` otherwise.
 *
 * Use `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.
 *
 * @param str {string}
 */
export const containsWhitespace = (str: string) => /\s/.test(str);

/**
 * Groups the elements of an array based on the given function and returns the count of elements in each group.
 *
 * Use `Array.prototype.map()` to map the values of an array to a function or property name.
 * Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.
 *
 * @param arr {T[]} here <T = any>
 * @param fn fn: Func<T> | string
 */
export const countBy = <T = any>(arr: T[], fn: Func<T> | string) => {
  const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];
  return arr.reduce((acc, val) => {
    const value = mapper(val);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {} as any);
};

/**
 * Counts the occurrences of a value in an array.
 *
 * Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.
 *
 * @param arr {T[]}
 * @param val {T}
 */
export const countOccurrences = <T = any>(arr: T[], val: T) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * Creates an element from a string (without appending it to the document).
 * if the given string contains multiple elements, only the first one will be returned.
 *
 * Use `document.createElement()` to create a new element.
 * Set its `innerHTML` to the string supplied as the argument.
 * Use `ParentNode.firstElementChild` to return the element version of the string.
 *
 * @param str { string }
 */
export const createElement = (str: string) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};

/**
 * Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.
 *
 * Use `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
 * For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
 * For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
 * to the array.
 * For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.
 *
 */
export const createEventHub = <T = any>() => ({
  hub: Object.create(null),
  emit(event: string, data?: T) {
    (this.hub[event] || []).forEach((handler: Func<T | undefined>) =>
      handler(data)
    );
  },
  on(event: string, handler: Func<T>) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event: string, handler: Func<T>) {
    const i = (this.hub[event] || []).findIndex((h: Func<T>) => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event]?.length === 0) delete this.hub[event];
  },
});

/**
 * Converts a comma-separated values (CSV) string to a 2D array.
 *
 * Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` to remove the first row (title row) if `omitFirstRow` is `true`.
 * Use `String.prototype.split('\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.
 * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
 * Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.
 *
 * @param data {string}
 * @param delimiter {string} @default ","
 * @param omitFirstRow {boolean}  @default false
 */
export const CSVToArray = (
  data: string,
  delimiter = ",",
  omitFirstRow = false
) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

/**
 * Converts a comma-separated values (CSV) string to a 2D array of objects.
 * The first row of the string is used as the title row.
 *
 * Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.
 * Use `String.prototype.split('\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.
 * Use `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.
 * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
 * @param data {string}
 * @param delimiter {string} @default ","
 */

type StringMap<T = string> = { [key: string]: T };

export const CSVToJSON = (data: string, delimiter = ",") => {
  const titles: string[] = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {} as StringMap
      );
    });
};

/**
 * Curries a function.
 *
 * Use recursion.
 * If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
 * Otherwise, return a curried function `fn` that expects the rest of the arguments.
 * If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.
 *
 * @param fn {Func}
 * @param arity {number} number of argument `fn` can have
 * @param args {...any[]} var args, pass initial values
 */
export const curry = (fn: Func, arity = fn.length, ...args: any[]): any =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

/**
 * dayOfYear: Gets the day of the year from a `Date` object.
 *
 * Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
 * Use `Math.floor()` to appropriately round the resulting day count to an integer.
 *
 * @param date {Date| string}
 * */
export const dayOfYear = (date: Date | string): number => {
  if (isString<Date>(date)) {
    date = new Date(date);
  }
  if (!isValidDate(date)) throw new Error(`Invalid Date string`);
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
};

/**
 * Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.
 *
 * Each time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.
 * Omit the second argument, `ms`, to set the timeout at a default of 0 ms.
 *
 * @param fn { Function }
 * @param ms {number} @default 300ms
 */
export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

/**
 * Creates a deep clone of an object.
 *
 * Use recursion.
 * Check if the passed object is `null` and, if so, return `null`.
 * Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
 * Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.
 *
 * @param obj {any}
 */
export const deepClone = (obj: any) => {
  if (obj === null) return null;
  let clone = { ...obj };
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};

/**
 * Deep flattens an array.
 *
 * Use recursion.[polyfill for `Array.prototype.flat`]
 * Use `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.
 * Recursively flatten each element that is an array.
 *
 * @param arr {any[]}
 */
export const deepFlatten = (arr: any[]): any[] => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(Infinity);
  return [].concat(
    ...arr.map((v: any) => (Array.isArray(v) ? deepFlatten(v) : v))
  );
};

/**
 * Deep freezes an object.
 *
 * Use `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.
 * Call `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.
 * Finally, use `Object.freeze()` to freeze the given object.
 *
 * @param obj
 */
export const deepFreeze = <T extends object>(obj: T) => {
  Object.keys(obj).forEach((prop) => {
    if (
      typeof obj[prop as keyof T] === "object" &&
      !Object.isFrozen(obj[prop as keyof T])
    ) {
      deepFreeze(obj[prop as keyof T]);
    }
  });
  return Object.freeze(obj);
};

/**
 * Returns the target value in a nested JSON object, based on the `keys` array.
 *
 * Compare the keys you want in the nested JSON object as an `Array`.
 * Use `Array.prototype.reduce()` to get value from nested JSON object one by one.
 * If the key exists in object, return target value, otherwise, return `null`.
 *
 * @param obj {any}
 * @param keys {string | (string | number)[],}
 * @param defaultValue {null | undefined } @default undefined
 * @param delimiter {string} @default "."
 */
export const deepGet = (
  obj: any,
  keys: string | (string | number)[],
  defaultValue: null | undefined = undefined,
  delimiter = "."
) => {
  if (isString(keys)) {
    keys = keys.split(delimiter);
  }
  return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), obj);
};

/**
 * Assigns default values for all properties in an object that are `undefined`.
 *
 * Use `Object.assign()` to create a new empty object and copy the original one to maintain key order, use spread operator `...` to combine the default values, finally use `obj` again to overwrite properties that originally had a value.
 *
 * @param obj {any}
 * @param defs {any[]}
 */
export const defaults = (obj: any, ...defs: any[]) =>
  Object.assign({}, obj, ...defs, obj);

/**
 * Invokes the provided function after `wait` milliseconds.
 *
 * Use `setTimeout()` to delay execution of `fn`.
 * Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.
 *
 * @param fn {Func} any function
 * @param wait {number} in ms
 * @param args {any[]}, arguments for fn
 */
export const delay = (fn: Func, wait: number, ...args: any[]) =>
  setTimeout(fn, wait, ...args);

/**
 * Return a promise, Resolve after `wait` milliseconds.
 *
 * @param wait {number} in ms
 * @param args{any[]}, arguments for Promise
 */
export const delayedPromise = (wait: number = 300, ...args: any[]) =>
  new Promise((resolve) => {
    delay(resolve, wait, ...args);
  });

/**
 *  Returns `true` if at least one function returns `true` for a given set of arguments, `false` otherwise.
 *
 * Use the logical or (`||`) operator on the result of calling the two functions with the supplied `args`.
 *
 * @param f { Function}
 * @param g { Function}
 */
export const either =
  (f: Function, g: Function) =>
  (...args: any[]) =>
    f(...args) || g(...args);

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
 * Check if only one value is `null` or `undefined` or if their prototypes differ.
 * If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.
 *
 * @param a {<T = any = any>}
 * @param b {<T = any = any>}
 */
export const equals = <T = any>(a: T, b: T): boolean => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
    return a === b;
  }
  const objA = a as any;
  const objB = b as any;
  if (objA.prototype !== objA.prototype) return false;
  let keys = Object.keys(objA);
  if (keys.length !== Object.keys(objB).length) return false;
  return keys.every((k: string) => equals(objA[k], objB[k]));
};

/**
 * Performs a deep comparison between two values to determine if they are equivalent. Same as `equals`, but without type check
 *
 * Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
 * Check if only one value is `null` or `undefined` or if their prototypes differ.
 * If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.
 *
 * @param a {any}
 * @param b {any}
 */
export const deepEquals = (a: any, b: any): boolean => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
    return a === b;
  }
  const objA = a;
  const objB = b;
  if (objA.prototype !== objA.prototype) return false;
  let keys = Object.keys(objA);
  if (keys.length !== Object.keys(objB).length) return false;
  return keys.every((k: string) => equals(objA[k], objB[k]));
};

/**
 * Convert array(csv) string to doanloadable file
 *
 * @param csvContent
 * @param name
 */
export const downloadCSV = (
  csvContent: string,
  name: string = "download.csv"
) => {
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", name);
  document.body.appendChild(link); // Required for FF
  link.click(); // This will download the data file named "my_data.csv".
};

/**
 * Escapes a string for use in HTML.
 *
 * Use `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).
 *
 * @param str {string}
 */
export const escapeHTML = (str: string) =>
  str.replace(
    htmlEscapeReg,
    (tag: string) => (HTMLEscapeChars as StringMap<string>)[tag] || tag
  );

/**
 * Unescapes escaped HTML characters.
 *
 * Use `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).
 * @param str
 */
export const unescapeHTML = (str: string) =>
  str.replace(
    htmlUnEscapeReg,
    (tag: string) => (HTMLUnEscapeChars as StringMap<string>)[tag] || tag
  );
/**
 * Escapes a string to use in a regular expression.
 *
 * Use `String.prototype.replace()` to escape special characters.
 *
 * @param str
 */
export const escapeRegExp = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Calculates the factorial of a number.
 *
 *Use recursion.
 *If `n` is less than or equal to `1`, return `1`.
 *Otherwise, return the product of `n` and the factorial of `n - 1`.
 *Throws an exception if `n` is a negative number.
 *
 * @param n {number}
 */
export const factorial = (n: number): number =>
  n <= 1 ? 1 : n * factorial(n - 1);

/**
 * Returns the memoized (cached) function.
 *
 * Create an empty cache by instantiating a new `Map` object.
 * Return a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.
 * Allow access to the `cache` by setting it as a property on the returned function.
 *
 * @param fn {Function}
 */
export const memoize = <T = any>(fn: Func<T>) => {
  const cache = new Map();
  const cached = function (this: any, val: T) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};

/**
 * Converts Fahrenheit to Celsius.
 *
 * Follows the conversion formula `C = (F - 32) * 5/9`.
 *
 * @param degrees
 */
export const fahrenheitToCelsius = (degrees: number) =>
  ((degrees - 32) * 5) / 9;

/**
 * Filters out the non-unique values in an array.
 *
 * Use `Array.prototype.filter()` for an array containing only the unique values.
 *
 * @param arr{any[]}
 */
export const filterNonUnique = <T = any>(arr: T[]) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

/**
 * Filters out the non-unique values in an array, based on a provided comparator function.
 *
 * Use `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.
 * The comparator function takes four arguments: the values of the two elements being compared and their indexes.
 *
 * @param arr {T[]}
 * @param fn {(obj1: T, obj2: T, index1: number, index2: number) => any}
 */
export const filterNonUniqueBy = <T = any>(
  arr: T[],
  fn: (obj1: T, obj2: T, index1: number, index2: number) => any
) => arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

/**
 * Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.
 *
 * Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.
 *
 * @param obj { any }
 * @param fn {key}
 */
export const findKey = (obj: any, fn: Function) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));

/**
 * Flattens an array up to the specified depth.
 *
 * Use recursion, decrementing `depth` by 1 for each level of depth.
 * Use `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.
 * Base case, for `depth` equal to `1` stops recursion.
 * Omit the second argument, `depth` to flatten only to a depth of `1` (single flatten).
 *
 *
 * @param arr {any[]}
 * @param depth
 */
export const flatten = (arr: any[], depth = 1): any[] => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(depth);
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
};

/**
 * Executes a provided function once for each array element, starting from the array's last element.
 *
 * @param arr {any[]}
 * @param callback { Function }
 */
export const forEachRight = (array: any[] = [], callback: Function) => {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    callback(element, index, array);
  }
};

/**
 * Returns the human readable format of the given number of milliseconds.
 *
 * Divide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.
 * Use `Object.entries()` with `Array.prototype.filter()` to keep only non-zero values.
 * Use `Array.prototype.map()` to create the string for each value, pluralizing appropriately.
 * Use `String.prototype.join(', ')` to combine the values into a string.
 *
 * @param ms {number} in ms
 */
export const formatDuration = (ms: number) => {
  ms = Math.abs(ms);
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};

/**
 * Format date based on format staring, using regex match
 *
 * @param formatStr
 * @param date
 */
const padLeft = (str: string | number, num: number = 2, fill = "0") =>
  String(str).padStart(num, fill);
export const formatDate = (formatStr: string, date: Date | string) => {
  const d = new Date(date);
  const time: any = {
    YY: padLeft(d.getFullYear()).substr(2, 4),
    YYYY: padLeft(d.getFullYear()),
    MM: padLeft(d.getMonth() + 1),
    DD: padLeft(d.getDate()),
    hh: padLeft(d.getHours()),
    mm: padLeft(d.getMinutes()),
    ss: padLeft(d.getSeconds()),
    M: padLeft(d.getMilliseconds(), 3),
  };
  return formatStr.replace(
    new RegExp(`${Object.keys(time).join("|")}`, "g"),
    (subStr: string) => {
      return time[subStr] || "";
    }
  );
};
interface IFormData {
  new (form: any): FormData;
}
// /**
//  * Encode a set of form elements as an `object`.
//  *
//  * Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.
//  * Collect the object from the array, using `Array.prototype.reduce()`.
//  *
//  * @param form
//  */
// export const formToObject = (form: any) => {
//   const F = FormData as IFormData;
//   Array.from(new F(form)).reduce(
//     (acc, [key, value]) => ({
//       ...acc,
//       [key]: value,
//     }),
//     {}
//   );
// };

/**
 * Retrieve a set of properties indicated by the given selectors from an object.
 *
 * Use `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.
 *
 * @param from {any}
 * @param selectors {string}
 */
export const get = (
  from: any,
  selector: string,
  defaultValue: any = undefined
) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    .reduce((prev, cur) => prev && prev[cur], from) || defaultValue;

/**
 * Retrieve a set of properties indicated by the given selectors(string[]) from an object.
 *
 * Use `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.
 *
 * @param from {any}
 * @param selectors {string[]}
 */
export const getAll = (from: any, ...selectors: string[]) =>
  [...selectors].map((s) => get(from, s));

/**
 * Returns the current URL without any parameters.
 * Use `String.prototype.indexOf()` to check if the given `url` has parameters, `String.prototype.slice()` to remove them if necessary.
 *
 * @param url { string }
 */
export const getBaseURL = (url: string) =>
  url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url;

/**
 * Returns the native type of a value.
 *
 * Return `'undefined'` or `'null'` if the value is `undefined` or `null`.
 * Otherwise, use `Object.prototype.constructor.name` to get the name of the constructor.
 *
 * @param v
 */
export const getType = (v: any) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

/**
 * Returns an object containing the parameters of the current URL.
 *
 * Use `String.prototype.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.
 * Pass `location.search` as the argument to apply to the current `url`.
 *
 * @param url {string}
 */
type URLParamValue = { [key: string]: string | string[] };
export const getURLParameters = (url: string) => {
  return (
    url.match(/([^?=&]+)(=([^&]*))/g)?.reduce((a: any, v: string) => {
      const [key, value] = v.split("=");
      if (a[key]) {
        a[key] = (
          (typeof a[key] === "string" ? [a[key]] : a[key]) as string[]
        ).concat(value);
      } else {
        a[key] = value;
      }
      return a;
    }, {} as URLParamValue) ?? {}
  );
};

/**
 * Converts any map to Plain Object
 *
 * @param map
 */
interface MapLike<T = any, U = T | null>
  extends Pick<Map<string, U>, "get" | "keys" | "values" | "entries"> {
  [Symbol.iterator](): IterableIterator<T>;
}
export const mapToObject = <T = any, U = any>(map: MapLike<T, U>) => {
  let result: { [key: string]: U | undefined } = {};
  for (let [key, value] of map.entries()) {
    result[key] = value;
  }
  return result;
};
// const pathname = url.split("?", 2)[1];
// if (!pathname) return {};
// if (typeof URLSearchParams !== undefined) {
//   return mapToObject<[string, string]>(new URLSearchParams(pathname));
// }

/**
 * Groups the elements of an array based on the given function.
 *
 * Use `Array.prototype.map()` to map the values of an array to a function or property name.
 * Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.
 *
 * type MapFunc<T = any> = (val: T, index?: number, arr?: T[]) => T;
 *
 * @param arr {any[]}
 * @param fn {MapFunc<T> | string}
 */
export const groupBy = <T = any>(arr: T[], fn: MapFunc<T> | string) =>
  arr.map(isString(fn) ? (val: any) => val[fn] : fn).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});

/**
 * Check if the current arguments contain the specified flags.
 *
 * Use `Array.prototype.every()` and `Array.prototype.includes()` to check if `args` contains all the specified flags.
 * Use a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.
 *
 *
 * @param flags
 */
export const hasFlags = (args: string[], ...flags: string[]) =>
  flags.every((flag) =>
    args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)
  );

/**
 * Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.
 *
 * Split string by chunk of 2, filter blank string. convert to number
 *
 * @param hex {string}
 */
export const hexToRGB = (hex: string) => {
  hex = hex.startsWith("#") ? hex.slice(1) : hex;
  if (hex.length === 3) {
    hex = Array.from(hex).reduce((str, x) => str + x + x, ""); // 123 -> 112233
  }
  const values = hex
    .split(/([a-z0-9]{2,2})/)
    .filter(Boolean)
    .map((x) => parseInt(x, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};
/**
 * Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.
 *
 * Same as hexToRGB but using chunk
 *
 * @param hex {string}
 */
export const hexToRGB2 = (hex: string) => {
  let hexChars = Array.from(hex.startsWith("#") ? hex.slice(1) : hex);
  if (hexChars.length === 3) {
    hexChars = hexChars.reduce((str, x) => [...str, x, x], [] as string[]); // 123 -> 112233
  }
  const values = chunk(hexChars, 2).map(([v1, v2]) => parseInt(v1 + v2, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};

/**
 * Hides all the elements specified.
 *
 * Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.
 *
 * @param el {HTMLElement[]}
 */
export const hide = <T extends HTMLElementLike>(...el: T[]) =>
  [...el].forEach((e) => (e.style.display = "none"));

/**
 * Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.
 *
 * Use `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.prototype.split()` and remove the protocol part of the URL.
 *
 */
export const httpsRedirect = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};

/**
 * Returns `true` if all the elements in `values` are included in `arr`, `false` otherwise.
 *
 * Use `Array.prototype.every()` and `Array.prototype.includes()` to check if all elements of `values` are included in `arr`.
 *
 * @param arr {any[]}
 * @param values  {any[]}
 */
export const includesAll = <T = any>(arr: T[], values: T[]) =>
  values.every((v) => arr.includes(v));

/**
 * Indents each line in the provided string.
 *
 * Use `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.
 * Omit the third parameter, `indent`, to use a default indentation character of `' '`.
 *
 * @param str
 * @param count
 * @param indent
 */
export const indentString = (str: string, count: number, indent = " ") => {
  indent = indent.repeat(count);
  return str.replace(/^/gm, indent);
};

/**
 * Checks if the given argument is a string. Only works for string primitives.
 *
 * Use `typeof` to check if a value is classified as a string primitive.
 * Guard Function to check string type
 *
 * @param str {string|T}
 */
export const isFunction = <T = any>(str: Function | T): str is Function => {
  return typeof str === "function";
};

/**
 * Checks if the given argument is a array like
 *
 * @param str {string|T}
 */
export const isArrayLike = (obj: any): obj is Array<any> => {
  return (
    obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
  );
};

/**
 * Checks if the given argument is a string. Only works for string primitives.
 *
 * Use `typeof` to check if a value is classified as a string primitive.
 * Guard Function to check string type
 *
 * @param str {string|T}
 */
export const isString = <T = any>(str: string | T): str is string => {
  return typeof str === "string";
};

/**
 * Validate date
 *
 * @param date {Date}
 */
export function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Initializes and fills an array with the specified values.
 *
 * Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
 * You can omit `val` to use a default value of `0`.
 *
 * @param n
 * @param val
 */
export const fillArray = (n: number, val: any = 0) => Array(n).fill(val);

/**
 * Initializes and fills an array with the specified values.
 *
 * Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
 * You can omit `val` to use a default value of `0`.
 *
 * @param n
 * @param val
 */
export const initializeArray = (n: number, val: any = 0) => Array(n).fill(val);

/**
 * Checks if the given number | Date | string falls within the given range.
 *
 * Use arithmetic comparison to check if the given number is in the specified range.
 * If the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.
 *
 * @param n {number | Date | string }
 * @param start {number | Date | string}
 * @param end {number | Date | string}
 */
export const inRange = <T extends number | Date | string>(
  n: T,
  start: T,
  end?: T
) => {
  if (end && start > end) [end, start] = [start, end];
  return end === undefined ? n >= (0 as T) && n < start : n >= start && n < end;
};

/**
 * Mutates the original array to insert the given values at the specified index.
 *
 * Use `Array.prototype.splice()` with an appropriate index and a delete count of `0`, spreading the given values to be inserted.
 *
 * @param arr {any[]}
 * @param i {number}
 * @param v {...any[]}
 */
export const insertAt = (arr: any[], i: number, ...v: any[]) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};

/**
 * Insert the given values at the specified index.
 *
 * Use `Array.prototype.slice()` with an appropriate index and a delete count of `0`, spreading the given values to be inserted.
 *
 * @param arr {any[]}
 * @param i {number}
 * @param v {...any[]}
 */
export const insertAtImmutable = (arr: any[], i: number, ...v: any[]) => {
  return [...arr.slice(0, i + 1), ...v, ...arr.slice(i + 1)];
};

/**
 * Returns a list of elements that exist in both arrays.
 *
 * Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`.
 *
 * @param a {any[]}
 * @param b {any[]}
 */
export const intersection = (a: any[], b: any[]) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};

/**
 * Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.
 *
 * Create a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.
 *
 * @param a {any[]}
 * @param b {any[]}
 * @param fn {MapFunc}
 */
export const intersectionBy = (a: any[], b: any[], fn: MapFunc) => {
  const s = new Set(b.map(fn));
  return [...new Set(a)].filter((x) => s.has(fn(x)));
};

/**
 * Returns a list of elements that exist in both arrays, using a provided comparator function.
 *
 * Use `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.
 *
 * @param a
 * @param b
 * @param comp
 */
export const intersectionWith = (
  a: any[],
  b: any[],
  comp: (a: any, b: any) => boolean
) => a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);

/**
 * Checks if the provided value is of the specified type.
 *
 * Ensure the value is not `undefined` or `null` using `Array.prototype.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`.
 *
 * @param type
 * @param val
 */
type ConstructorType<T = any> = new (...args: any[]) => T;
export const is = (type: ConstructorType | string, val: any) =>
  ![, null].includes(val) &&
  (isString(type) ? val.constructor.name === type : val.constructor === type);

/**
 * Check if a date is after another date.
 *
 * Use the greater than operator (`>`) to check if the first date comes after the second one.
 *
 * @param dateA
 * @param dateB
 */
export const isAfterDate = (dateA: Date, dateB: Date) => dateA > dateB;

/**
 * Check if a date is before another date.
 *
 * Use the greater than operator (`<`) to check if the first date comes before the second one.
 *
 * @param dateA
 * @param dateB
 */
export const isBeforeDate = (dateA: Date, dateB: Date) => dateA < dateB;

/**
 * Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.
 *
 * Use `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.
 * `typeof` allows globals to be checked for existence without throwing a `ReferenceError`.
 * If both of them are not `undefined`, then the current environment is assumed to be a browser.
 *
 */
export const isBrowser = () =>
  ![typeof window, typeof document].includes("undefined");

/**
 * Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.
 *
 * Check if the provided value is `null` or if its `length` is equal to `0`.
 *
 * @param val
 */
export const isEmpty = (val: any) =>
  val == null || !(Object.keys(val) || val).length;

/**
 * Returns `true` if the given `year` is a leap year, `false` otherwise.
 *
 * Use `new Date()`, setting the date to February 29th of the given `year` and use `Date.prototype.getMonth()` to check if the month is equal to `1`.
 *
 * @param year {number}
 */
export const isLeapYear = (year: number) =>
  new Date(year, 1, 29).getMonth() === 1;

/**
 * Checks if a string is lower case.
 *
 * Convert the given string to lower case, using `String.toLowerCase()` and compare it to the original.
 *
 * @param str {string}
 */
export const isLowerCase = (str: string) => str === str.toLowerCase();

/**
 * Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.
 *
 * Use the strict equality operator to check if the value of `val` is equal to `null` or `undefined`.
 *
 * @param val {any}
 */
export const isNil = (val: any) => val === undefined || val === null;

/**
 * Returns `true` if the specified value is `null`, `false` otherwise.
 *
 * Use the strict equality operator to check if the value of `val` is equal to `null`.
 *
 * @param val {any}
 */
export const isNull = (val: any) => val === null;

/**
 * Checks if the given argument is a number.
 *
 * Use `typeof` to check if a value is classified as a number primitive.
 * To safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).
 *
 * @param val {any}
 */
export const isNumber = (val: any) => typeof val === "number" && val === val;

/**
 * Returns a boolean determining if the passed value is an object or not.
 *
 * Uses the `Object` constructor to create an object wrapper for the given value.
 * If the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.
 *
 * @param obj
 */
export const isObject = (obj: any) => obj === Object(obj);

/**
 * Checks if the provided value is an object created by the Object constructor.
 *
 * Check if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.
 *
 * @param val
 */
export const isPlainObject = (val: any) =>
  !!val && typeof val === "object" && val.constructor === Object;

/**
 * Returns a boolean determining if the passed value is primitive or not.
 *
 * Create an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object).
 *
 * @param val {any}
 */
export const isPrimitive = (val: any) => Object(val) !== val;

/**
 * Check if a date is the same as another date.
 *
 * Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.
 *
 * @param dateA {Date}
 * @param dateB {Date}
 */
export const isSameDate = (dateA: Date, dateB: Date) =>
  dateA.toISOString() === dateB.toISOString();

// TODO: Refactor

/**
 * Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.
 *
 * Calculate the ordering `direction` for the first two elements.
 * Use `Object.entries()` to loop over array objects and compare them in pairs.
 * Return `0` if the `direction` changes or the `direction` if the last element is reached.
 *
 * @param arr
 */
export const isSorted = (arr: any[]) => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1)
      return !direction ? 0 : direction / Math.abs(direction);
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};

/**
 * Checks if a string is upper case.
 *
 * Convert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.
 *
 * @param str {string}
 */
export const isUpperCase = (str: string) => str === str.toUpperCase();

/**
 * Checks if the provided string is a valid JSON.
 *
 * Use `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON.
 *
 * @param str {string}
 */
export const isValidJSON = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.
 *
 * Use `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.
 * Use `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.
 * Use `Array.prototype.join('\n')` to combine all rows into a string.
 * Omit the third argument, `delimiter`, to use a default delimiter of `,`.
 *
 * @param arr
 * @param columns
 * @param delimiter
 */
export const JSONtoCSV = (arr: any[], columns: string[], delimiter = ",") =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
        ""
      )
    ),
  ].join("\n");

/**
 * Returns the last element in an array.
 *
 * Check if `arr` is truthy and has a `length` property, use `arr.length - 1` to compute the index of the last element of the given array and return it, otherwise return `undefined`.
 *
 * @param arr
 */
export const last = (arr: any[] = []) => arr[arr.length - 1];

/**
 * Adds an event listener to an element that will only run the callback the first time the event is triggered.
 *
 * Use `EventTarget.addEventListener()` to add an event listener to an element, storing the reference in a variable.
 * Use a condition to call `fn` only the first time the listener is triggered.
 *
 * @param el
 * @param evt
 * @param fn
 */

export const listenOnce = <E extends IEventListener>(
  el: E,
  evt: string,
  fn: Func
) => {
  let fired = false;
  el.addEventListener(evt, (e) => {
    if (!fired) fn(e);
    fired = true;
  });
};

/**
 * Creates a new object from the specified object, where all the keys are in lowercase.
 *
 * Use `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.
 * Convert each key in the original object to lowercase, using `String.toLowerCase()`.
 *
 * @param obj
 */
export const lowercaseKeys = (obj: AnyObject, deep = false) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] =
      deep && typeof obj[key] === "object" ? lowercaseKeys(obj[key]) : obj[key];
    return acc;
  }, {} as AnyObject);

/**
 * Creates an object with keys generated by running the provided function for each key and the same values as the provided object.
 *
 * Use `Object.keys(obj)` to iterate over the object's keys.
 * Use `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.
 *
 * @param obj
 * @param fn
 */
export const mapKeys = (
  obj: AnyObject,
  fn: (v: AnyObject, k: string, o: AnyObject) => string
) =>
  Object.keys(obj).reduce((acc, k: string) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {} as AnyObject);

/**
 * Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the result of the function as the value.
 *
 * Use `Array.prototype.reduce()` to apply `fn` to each element in `arr` and combine the results into an object.
 * Use `el` as the key for each property and the result of `fn` as the value.
 *
 * @param arr
 * @param fn
 */
export const mapObject = <T = any>(arr: T[], fn: MapFunc<T>) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {} as any);

/**
 * Creates a new string with the results of calling a provided function on every character in the calling string.
 *
 * Use `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.
 * Use `Array.prototype.join('')` to recombine the array of characters into a string.
 * The callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).
 *
 * @param str
 * @param fn
 */
export const mapString = (str: string, fn: MapFunc<string>) => {
  const chars = [...str];
  return chars.map((c, i) => fn(c, i, chars)).join("");
};
/**
 * Creates a new map with the results of calling a provided function on every value in the calling function.
 *
 * Use `Array.isArray()` to detect array, else destructure array like data(string).
 * Use `Array.prototype.map()` to map array of data.
 */
export const map = <T = any>(array: Iterable<T>, fn: MapFunc<T>) => {
  const chars = Array.isArray(array) ? array : [...array];
  return chars.map((c, i) => fn(c, i, chars));
};

/**
 * Replaces all but the last `num` of characters with the specified mask character.
 *
 * Use `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.
 * Omit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.
 * Omit the third argument, `mask`, to use a default character of `'*'` for the mask.
 *
 * @param cc
 * @param num
 * @param mask
 */
export const mask = (cc: number | string, num = 4, mask = "*") =>
  String(cc).slice(-num).padStart(String(cc).length, mask);

/**
 * Compares two objects to determine if the first one contains equivalent property values to the second one.
 *
 * Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.
 *
 * @param obj
 * @param source
 */
export const matches = (obj: AnyObject, source: AnyObject) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

/**
 * Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.
 *
 * Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.
 * If no function is provided, the values will be compared using the equality operator.
 *
 * @param obj
 * @param source
 * @param fn
 */
export const matchesWith = (obj: AnyObject, source: AnyObject, fn: Function) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
/**
 * Returns the maximum value of an array, after mapping each element to a value using the provided function.
 *
 * Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.
 *
 * @param arr
 * @param fn
 */
export const maxBy = <T = any>(arr: T[], fn: MapFunc<T> | string) =>
  Math.max(...arr.map(isString(fn) ? (val: any) => val[fn] : fn));

/**
 * Returns the maximum of the given dates.
 *
 * Use the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.
 *
 * @param dates
 */
export const maxDate = (dates: Date[]) =>
  new Date(Math.max(...dates.map(Number)));

/**
 * Returns the `n` maximum elements from the provided array.
 * If `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).
 *
 * Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.
 * Use `Array.prototype.slice()` to get the specified number of elements.
 * Omit the second argument, `n`, to get a one-element array.
 * @param arr
 * @param n
 */
export const maxN = (arr: any[], n = 1, order: SortOrder = 1) =>
  [...arr].sort((a, b) => (order as number) * (b - a)).slice(0, n);

/**
 * Creates a new object from the combination of two or more objects.
 *
 * Use `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.
 * Use `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects.
 *
 * @param objs
 */
export const merge = (...objs: AnyObject[]) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k];
        return acc;
      }, {}),
    {}
  );

/**
 * Calculates the midpoint between two pairs of (x,y) points.
 * Destructure the array to get `x1`, `y1`, `x2` and `y2`, calculate the midpoint for each dimension by dividing the sum of the two endpoints by `2`.
 *
 * @param param0
 * @param param1
 */
type IPoint = [number, number];
export const midpoint = ([x1, y1]: IPoint, [x2, y2]: IPoint) => [
  (x1 + x2) / 2,
  (y1 + y2) / 2,
];

/**
 * Returns the minimum value of an array, after mapping each element to a value using the provided function.
 *
 * Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the minimum value.
 *
 * @param arr
 * @param fn
 */
export const minBy = <T = any>(arr: T[], fn: MapFunc<T> | string) =>
  Math.min(...arr.map(isString(fn) ? (val: any) => val[fn] : fn));

/**
 * Sort by based on the key or function.
 *
 * Use the spread operator (`...`), `Array.prototype.sort()` and `String.localeCompare()` to sort array of data.
 * @param arr
 * @param $fn
 * @param order {1|-1}
 */
type SortByFunc<T> = (s1: T, s2: T) => number;

export const sortBy = <T = any>(
  arr: T[],
  $fn: SortByFunc<T> = (s1: any, s2: any) =>
    order * String(s1).localeCompare(String(s2)),
  order: SortByOrder = SortByOrder.ASC
) => {
  let fn = $fn;
  return [...arr].sort(fn);
};

export enum SortByOrder {
  ASC = 1,
  DESC = -1,
}

/**
 * Sort by based on the key.
 *
 * Use the spread operator (`...`), `Array.prototype.sort()` and `String.localeCompare()` to sort array of data.
 *
 * @param arr
 * @param fn
 */
export const sortByKey = <T = any>(
  arr: T[],
  key: string,
  order: SortByOrder = SortByOrder.ASC
) => {
  return [...arr].sort(
    (s1: any, s2: any) => order * String(s1[key]).localeCompare(String(s2[key]))
  );
};

/**
 * Returns the most frequent element in an array.
 *
 * Use `Array.prototype.reduce()` to map unique values to an object's keys, adding to existing keys every time the same value is encountered.
 * Use `Object.entries()` on the result in combination with `Array.prototype.reduce()` to get the most frequent value in the array.
 *
 * @param arr
 */
export const mostFrequent = <T extends string | number>(arr: T[]) =>
  Object.entries(
    arr.reduce((a: AnyObject, v: T) => {
      a[String(v)] = a[String(v)] ? a[String(v)] + 1 : 1;
      return a;
    }, {} as AnyObject)
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [-1, 0])[0] as T;

/**
 * Returns the index of the function in an array of functions which executed the fastest.
 *
 * Use `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times. Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.
 * Use `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.
 * Omit the second argument, `iterations`, to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take.
 *
 * @param fns
 * @param iterations
 */
export const mostPerformant = (fns: Function[], iterations = 10000) => {
  const times = fns.map((fn) => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};

/**
 * Negates a predicate function.
 *
 * Take a predicate function and apply the not operator (`!`) to it with its arguments.
 *
 * @param func
 */
export const negate =
  (func: Function) =>
  (...args: any[]) =>
    !func(...args);

/**
 * Given a flat array of objects linked to one another, it will nest them recursively.
 * Useful for nesting comments, such as the ones on reddit.com.
 *
 * Use recursion.
 * Use `Array.prototype.filter()` to filter the items where the `id` matches the `link`, then `Array.prototype.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.
 * Omit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).
 * Omit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.
 *
 * @param items
 * @param id
 * @param link
 */
export const nest = (
  items: AnyObject[],
  id: number | null = null,
  link = "parent_id"
): AnyObject =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id, link) }));

/**
 * Converts a `NodeList` to an array.
 *
 * Use spread operator inside new array to convert a `NodeList` to an array.
 *
 * @param nodeList
 */
export const nodeListToArray = <T = any>(nodeList: Iterable<T>) => [
  ...nodeList,
];

/**
 * Converts a `ArrayLike` to an array.
 *
 * Use spread operator inside new array to convert a `arrayLike` to an array.
 *
 * @param arrLike
 */
export const toArray = <T = any>(arrLike: Iterable<T>) => [...arrLike];

/**
 * Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.
 *
 * Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
 * Omit the second argument, `fn`, to use `Boolean` as a default.
 *
 * @param arr
 * @param fn
 */
export const none = (arr: any[], fn: Predicate = Boolean) => !arr.some(fn);

/**
 * Returns the logical inverse of the given value.
 *
 * Use the logical not (`!`) operator to return the inverse of the given value.
 *
 * @param a
 */
export const not = (a: any) => !a;

/**
 * Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.
 *
 * Use `Array.prototype.slice()` to get the desired argument at index `n`.
 *
 * @param n
 */
export const nthArg =
  (n: number) =>
  (...args: any[]) =>
    args.slice(n)[0];

export const nthElement = curry(
  (n = 0, arr: any[]) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0],
  2
);

/**
 * Returns a query string generated from the key-value pairs of the given object.
 *
 * Use `Array.prototype.reduce()` on `Object.entries(queryParameters)` to create the query string.
 * Determine the `symbol` to be either `?` or `&` based on the `length` of `queryString` and concatenate `val` to `queryString` only if it's a string.
 * Return the `queryString` or an empty string when the `queryParameters` are falsy.
 *
 * @param queryParameters
 */
export const objectToQueryString = (queryParameters: AnyObject) => {
  return queryParameters
    ? Object.entries(queryParameters).reduce(
        (queryString, [key, val], index) => {
          const symbol = queryString.length === 0 ? "?" : "&";
          queryString += val ? `${symbol}${key}=${val}` : "";
          return queryString;
        },
        ""
      )
    : "";
};

/**
 * Moves the specified amount of elements to the end of the array.
 *
 * Use `Array.prototype.slice()` twice to get the elements after the specified index and the elements before that.
 * Use the spread operator(`...`) to combine the two into one array.
 * If `offset` is negative, the elements will be moved from end to start.
 *
 * @param arr
 * @param offset
 */
export const offset = (arr: any[], offset: number) => [
  ...arr.slice(offset),
  ...arr.slice(0, offset),
];

/**
 * Omits the key-value pairs corresponding to the given keys from an object.
 *
 * Use `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.
 * Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.
 *
 * @param obj
 * @param arr
 */
export const omit = (obj: AnyObject, arr: string[]) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as AnyObject);

/**
 * Creates an object composed of the properties the given function returns falsy for. The function is invoked with two arguments: (value, key).
 *
 * Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.
 * Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.
 *
 * @param obj
 * @param fn
 */
export const omitBy = (obj: AnyObject, fn: Predicate) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as AnyObject);

/**
 * Returns `true` if at least one of the arguments is `true`, `false` otherwise.
 *
 * Use the logical or (`||`) operator on the two given values.
 *
 * @param a
 * @param b
 */
export const or = (a: any, b: any) => a || b;

/**
 * Returns a sorted array of objects ordered by properties and orders.
 *
 * Uses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.
 * If no `orders` array is passed it sort by `'asc'` by default.
 *
 * @param arr
 * @param props
 * @param orders
 */
export const orderBy = <T = AnyObject>(
  arr: T[],
  props: (keyof T)[],
  orders?: ("asc" | "desc")[]
) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

/**
 * Returns a sorted array of objects ordered by properties and orders.
 *
 * Uses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.
 * If no `orders` array is passed it sort by `'asc'` by default.
 *
 * @param arr
 * @param props
 * @param orders
 */
export const orderByFunc = <T = AnyObject>(
  arr: T[],
  props: (keyof T)[],
  fn: Function
) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = [a[prop], b[prop]];
        acc = fn(p1, p2, prop);
      }
      return acc;
    }, 0)
  );

/**
 * Pads a string on both sides with the specified character, if it's shorter than the specified length.
 *
 * Use `String.prototype.padStart()` and `String.prototype.padEnd()` to pad both sides of the given string.
 * Omit the third argument, `char`, to use the whitespace character as the default padding character.
 *
 * @param str
 * @param length
 * @param char
 */
export const pad = (str: string | number, length: number, char = " ") => {
  const s = String(str);
  return s.padStart((s.length + length) / 2, char).padEnd(length, char);
};

/**
 *   Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.
 *
 * Use `String.prototype.split(';')` to separate key-value pairs from each other.
 * Use `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.
 * Use `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.
 *
 * @param str
 */
export const parseCookie = (str: string) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {} as AnyObject);

/**
 * Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.
 *
 * Use the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.
 *
 * @param fn
 * @param partials
 */
export const partial =
  (fn: Function, ...partials: any[]) =>
  (...args: any[]) =>
    fn(...partials, ...args);

/**
 * Creates a function that invokes `fn` with `partials` appended to the arguments it receives.
 *
 * Use the spread operator (`...`) to append `partials` to the list of arguments of `fn`.
 *
 * @param fn
 * @param partials
 */
export const partialRight =
  (fn: Function, ...partials: any[]) =>
  (...args: any[]) =>
    fn(...args, ...partials);

/**
 * Groups the elements into two arrays, depending on the provided function's truthiness for each element.
 *
 * Use `Array.prototype.reduce()` to create an array of two arrays.
 * Use `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.
 *
 * @param arr
 * @param fn
 */
export const partition = (arr: any[], fn: Predicate) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );

/**
 * Applies `fn` to each value in `arr`, splitting it each time `fn` returns a new value.
 *
 * Use `Array.prototype.reduce()` with an accumulator object that will hold the resulting array and the last value returned from `fn`.
 * Use `Array.prototype.push()` to add each value in `arr` to the appropriate partition in the accumulator array.
 *
 * @param arr
 * @param fn
 */
export const partitionBy = <R = any>(arr: any[], fn: MapFunc<any, R>) =>
  arr.reduce(
    ({ res, last }, v, i, a) => {
      const next = fn(v, i, a);
      if (next !== last) res.push([v]);
      else res[res.length - 1].push(v);
      return { res, last: next };
    },
    { res: [] }
  ).res;

/**
 * Picks the key-value pairs corresponding to the given keys from an object.
 *
 * Use `Array.prototype.reduce()` to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.
 *
 * @param obj
 * @param arr
 */
export const pick = (obj: AnyObject, arr: string[]) =>
  arr.reduce(
    (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {} as AnyObject
  );

/**
 * Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).
 *
 * Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.
 * Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.
 *
 * @param obj
 * @param fn
 */
export const pickBy = (obj: AnyObject, fn: Function) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as AnyObject);

/**
 * Performs left-to-right function composition for asynchronous functions.
 *
 * Use `Array.prototype.reduce()` and the spread operator (`...`) to perform function composition using `Promise.then()`.
 * The functions can return a combination of normal values, `Promise`s or be `async`, returning through `await`.
 * All functions must accept a single argument.
 *
 * type PromiseReturn = (v: any) => Promise<any>;
 *
 * @param fns {PromiseReturn[]}
 */
type PromiseReturn = (v: any) => Promise<any>;
export const pipeAsyncFunctions =
  (...fns: PromiseReturn[]) =>
  (arg: any) =>
    fns.reduce((p, f) => p.then(f), Promise.resolve(arg) as PromiseLike<any>);

/**
 * Performs left-to-right function composition.
 *
 * Use `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.
 * The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.
 *
 *
 * @param fns
 */
export const pipeFunctions = (...fns: Func<any>[]) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );

/**
 * Returns the singular or plural form of the word based on the input number.
 *
 * If `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary.
 *
 * @param num
 * @param word
 * @param plural
 */
export const pluralize = (num: number, word: string, plural = word + "s") =>
  [1, -1].includes(Number(num)) ? word : plural;

/**
 * Returns the prefixed version (if necessary) of a CSS property that the browser supports.
 *
 * Use `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.
 * Use `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.
 *
 *
 * @param prop
 */
export const prefix = (prop: string) => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ["", "webkit", "moz", "ms", "o"];
  const i = prefixes.findIndex(
    (prefix) =>
      typeof (document.body.style as any)[
        prefix ? prefix + capitalizedProp : prop
      ] !== "undefined"
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};

/**
 * Converts a number in bytes to a human-readable string.
 *
 * Use an array dictionary of units to be accessed based on the exponent.
 * Use `Number.toPrecision()` to truncate the number to a certain number of digits.
 * Return the prettified string by building it up, taking into account the supplied options and whether it is negative or not.
 * Omit the second argument, `precision`, to use a default precision of `3` digits.
 * Omit the third argument, `divider`, to add space between the number and unit by default.
 *
 * @param num
 * @param precision
 * @param divider
 */
export const prettyBytes = (num: number, precision = 3, addSpace = " ") => {
  const UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (Math.abs(num) < 1) return num + addSpace + UNITS[0];
  const exponent = Math.min(
    Math.floor(Math.log10(num < 0 ? -num : num) / 3),
    UNITS.length - 1
  );
  const n = Number(
    ((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)
  );
  return (num < 0 ? "-" : "") + n + addSpace + UNITS[exponent];
};

/**
 * Template String funtion, Same as prettyBytes but more cleaner way
 *
 * @param strings
 * @param bytes
 * @param precision
 */
export const prettyBytesT = (
  strings: TemplateStringsArray,
  bytes: number,
  precision: number = 3
) => {
  return prettyBytes(bytes, precision, strings.join(""));
};

/**
 * Converts an asynchronous function to return a promise.
 *
 * _In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)_
 *
 * Use currying to return a function returning a `Promise` that calls the original function.
 * Use the `...rest` operator to pass in all the parameters.
 *
 *
 * @param func
 */
export const promisify =
  (func: Function) =>
  (...args: any[]) =>
    new Promise((resolve, reject) =>
      func(...args, (err: Error, result: any) =>
        err ? reject(err) : resolve(result)
      )
    );

/**
 * Converts an angle from radians to degrees.
 *
 * Use `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.
 *
 * @param rad
 */
export const radsToDegrees = (rad: number) => (rad * 180.0) / Math.PI;

/**
 * Generates a random hexadecimal color code.
 *
 * Use `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number.
 * Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.
 *
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

/**
 * Returns a random integer in the specified range.
 *
 * Use `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.
 *
 * @param min {default 0}
 * @param max {default 100}
 */
export const randomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Returns a random number in the specified range.
 *
 * Use `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.
 *
 * @param min {default 0.0}
 * @param max {default 100.0}
 */
export const randomNumber = (min = 0.0, max = 100.0) =>
  Math.random() * (max - min + 1) + min;

/**
 * Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.
 *
 * Use `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.
 * You can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.
 *
 *
 * @param arr
 * @param comparator
 */
export const reduceWhich = <T extends number | string | AnyObject = number>(
  arr: T[],
  comparator: Function = (a: number, b: number) => (a - b) as number
) => arr.reduce((a: T, b: T) => (comparator(a, b) >= 0 ? b : a));

/**
 * Removes non-printable ASCII characters.
 *
 * Use a regular expression to remove non-printable ASCII characters.
 *
 * @param str
 */
export const removeNonASCII = (str: string) => str.replace(/[^\x20-\x7E]/g, "");

/**
 * Renders the given DOM tree in the specified DOM element.
 *
 * Destructure the first argument into `type` and `props`, use `type` to determine if the given element is a text element.
 * Based on the element's `type`, use either `Document.createTextNode()` or `Document.createElement()` to create the DOM element.
 * Use `Object.keys(props`, adding attributes to the DOM element and setting event listeners, as necessary.
 * Use recursion to render `props.children`, if any.
 * Finally, use `Node.appendChild()` to append the DOM element to the specified `container`.
 *
 * @param param0
 * @param container
 */
export const renderElement = (
  { type, props = {} as IElementProps }: IElement,
  container: any
) => {
  const isTextElement = !type;
  const element: any = isTextElement
    ? document.createTextNode("")
    : document.createElement(type);
  const isListener = (p: string) => p.startsWith("on");
  const isAttribute = (p: string) => !isListener(p) && p !== "children";
  Object.keys(props).forEach((p: string) => {
    if (isAttribute(p)) element[p] = props[p];
    if (!isTextElement && isListener(p))
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
  });

  if (!isTextElement && props.children && props.children.length)
    props.children.forEach((childElement) =>
      renderElement(childElement, element)
    );

  container.appendChild(element);
};

/**
 * Reverses a string.
 *
 * Use the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.
 * Combine characters to get a string using `String.prototype.join('')`.
 *
 * @param str
 */
export const reverseString = (str: string) => {
  let s = "";
  for (let char of str) {
    s = char + s;
  }
  return s;
};

/**
 * Converts the values of RGB components to a color code.
 *
 * Convert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.
 *
 * @param r
 * @param g
 * @param b
 */
export const RGBToHex = (
  r: number,
  g: number,
  b: number,
  hash: "#" | "" = ""
) => hash + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

/**
 * Rounds a number to a specified amount of digits.
 *
 * Use `Math.round()` and template literals to round the number to the specified number of digits.
 * Omit the second argument, `decimals` to round to an integer.
 *
 * @param n
 * @param decimals
 */
export const round = (n: number, decimals = 0) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);

/**
 * Runs an array of promises in series.
 *
 * Use `Array.prototype.reduce()` to create a promise chain, where each promise returns the next promise when resolved.
 *
 * @param ps
 */
type PromiseFunc = (...args: any[]) => Promise<any>;
export const runPromisesInSeries = (ps: PromiseFunc[]) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve()) as Promise<any>;

/**
 * Smooth-scrolls to the top of the page.
 *
 * Get distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.
 * Scroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling.
 *
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

/**
 * Serialize a cookie name-value pair into a Set-Cookie header string.
 *
 * Use template literals and `encodeURIComponent()` to create the appropriate string.
 *
 * @param name
 * @param val
 */
export const serializeCookie = (name: string, val: string) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

// /**
//  * Encode a set of form elements as a query string.
//  *
//  * Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array, passing a map function as the second argument.
//  * Use `Array.prototype.map()` and `window.encodeURIComponent()` to encode each field's value.
//  * Use `Array.prototype.join()` with appropriate argumens to produce an appropriate query string.
//  *
//  * @param form
//  */
// export  const serializeForm = (form: any) =>
//     Array.from(new FormData(form), (field) =>
//       field.map((str: string) => encodeURIComponent(str)).join("=")
//     ).join("&");

/**
 * Shows all the elements specified.
 *
 * Use the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified.
 *
 * @param el
 */

export const show = <T extends HTMLElementLike>(...el: T[]) =>
  [...el].forEach((e) => (e.style.display = ""));

/**
 * Randomizes the order of the values of an array, returning a new array.
 *
 * Use the [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method) to reorder the elements of the array.
 *
 * @param param0
 */
export const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

/**
 * Gets the size of an array, object or string.
 *
 * Get type of `val` (`array`, `object` or `string`).
 * Use `length` property for arrays.
 * Use `length` or `size` value if available or number of keys for objects.
 * Use `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.
 * Split strings into array of characters with `split('')` and return its length.
 *
 * @param val
 */
export const size = (val: any) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;

/**
 * Delays the execution of an asynchronous function.
 *
 * Delay executing part of an `async` function, by putting it to sleep, returning a `Promise`.
 *
 * @param ms
 */

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Splits a multiline string into an array of lines.
 *
 * Use `String.prototype.split()` and a regular expression to match line breaks and create an array.
 * @param str
 */
export const splitLines = (str: string) => str.split(/\r?\n/);

/**
 * Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.
 *
 * Use closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.
 *
 * @param fn
 */
export const spreadOver = (fn: Function) => (argsArr: any[]) => fn(...argsArr);

/**
 * Performs stable sorting of an array, preserving the initial indexes of items when their values are the same.
 * Does not mutate the original array, but returns a new array instead.
 *
 * Use `Array.prototype.map()` to pair each element of the input array with its corresponding index.
 * Use `Array.prototype.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.
 * Use `Array.prototype.map()` to convert back to the initial array items.
 *
 * @param arr
 * @param compare
 */
export const stableSort = <T = any>(
  arr: T[],
  compare: (a: T, b: T) => number
) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
/**
 * Removes HTML/XML tags from string.
 *
 * Use a regular expression to remove HTML/XML tags from a string.
 *
 * @param str
 */
export const stripHTMLTags = (str: string) => str.replace(/<[^>]*>/g, "");

/**
 * Returns the sum of two or more numbers/arrays.
 *
 * Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.
 */
export const sum = (...arr: number[]) =>
  [...arr].reduce((acc, val) => acc + val, 0);

/**
 * Returns the sum of an array, after mapping each element to a value using the provided function.
 *
 * Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.
 *
 * @param arr
 * @param fn
 */
export const sumBy = <T extends AnyObject>(
  arr: T[],
  fn: string | ((a: T) => number)
) => {
  return arr
    .map(typeof fn === "function" ? fn : (val: AnyObject) => val[fn])
    .reduce((acc, val) => acc + val, 0);
};

/**
 * Returns all elements in an array except for the first one.
 *
 * Return `Array.prototype.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array.
 *
 *
 * @param arr
 */
export const tail = (arr: any[]) => (arr.length > 1 ? arr.slice(1) : arr);

/**
 * Returns an array with n elements removed from the beginning.
 *
 * Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning.
 *
 * @param arr
 * @param n
 */
export const take = (arr: any[], n = 1) => arr.slice(0, n);

/**
 * Returns an array with n elements removed from the end.
 *
 * Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the end.
 *
 * @param arr
 * @param n
 */
export const takeRight = (arr: any[], n = 1) =>
  arr.slice(arr.length - n, arr.length);

/**
 * Removes elements in an array until the passed function returns `true`. Returns the removed elements.
 *
 * Loop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.
 * Return the removed elements, using `Array.prototype.slice()`.
 *
 * @param arr
 * @param func
 */
export const takeWhile = (arr: any[], func: Predicate) =>
  arr.reduce((acc, el) => (func(el) ? acc : acc.concat(el)), []);

/**
 * Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.
 *
 * Loop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.
 *
 * @param arr
 * @param func
 */
export const takeRightWhile = (arr: any[], func: Predicate) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el].concat(acc)), []);

/**
 *
 * @param fn { Function }
 * @param wait { Number } @default 300ms
 */
export const throttle = (fn: Function, wait: number = 300) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

/**
 * Iterates over a callback `n` times
 *
 * Use `Function.call()` to call `fn` `n` times or until it returns `false`.
 * Omit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).
 *
 * @param n
 * @param fn
 * @param context
 */
export const times = (n: number, fn: Function, context: any = undefined) => {
  let i = 0;
  let result: any;
  do {
    result = fn.call(context, i);
  } while (result !== false && ++i < n);
  return result;
};

/**
 * Measures the time taken by a function to execute.
 *
 * Use `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute.
 *
 * @param callback
 */
export const timeTaken = (callback: Function) => {
  const id = `timeTaken_${Date.now()}`;
  console.time(id);
  const r = callback();
  console.timeEnd(id);
  return r;
};

/**
 * Converts a string to camelcase.
 *
 * Break the string into words and combine them capitalizing the first letter of each word, using a regexp.
 *
 * @param str
 */
export const toCamelCase = (str: string) => {
  let s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x: string) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");
  return s && s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * Converts a number to a decimal mark formatted string.
 *
 * Use `Number.prototype.toLocaleString()` to convert the numbre to decimal mark format.
 *
 * @param num
 */
export const toDecimalMark = (num: number) => num.toLocaleString("en-US");

/**
 * Converts a string to kebab case.
 *
 * Break the string into words and combine them adding `-` as a separator, using a regexp.
 *
 * @param str
 */
export const toKebabCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("-");

/**
 * Converts a string to humanize string url
 *
 * The \w metacharacter is used to find a word character.
 * Replace all non character with -.
 * Note: A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
 *
 * @param str
 */
export const humanizeUrl = (
  str: string,
  preserveUndersore = false,
  preserveCase = false
) => {
  const re = preserveUndersore ? /[\W]+/g : /[\W_]+/g;
  return preserveCase
    ? str.replace(re, "-")
    : str.replace(re, "-").toLowerCase();
};

/**
 * Adds an ordinal suffix to a number.
 *
 * Use the modulo operator (`%`) to find values of single and tens digits.
 * Find which ordinal pattern digits match.
 * If digit is found in teens pattern, use teens ordinal.
 * @param num
 */

export const toOrdinalSuffix = (num: string | number) => {
  const int = parseInt(String(num)),
    digits = [int % 10, int % 100],
    ordinals = ["st", "nd", "rd", "th"],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};

/**
 * Creates an array of key-value pair arrays from an object or other iterable (object, array, string, set etc.).
 *
 * Check if `Symbol.iterator` is defined and, if so, use `Array.prototype.entries()` to get an iterator for the given iterable, `Array.from()` to convert the result to an array of key-value pair arrays.
 * If `Symbol.iterator` is not defined for `obj`, use `Object.entries()` instead.
 *
 * const isArrayLike = (obj: any): obj is Array<any> => {
 *   return (
 *     obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
 *   );
 * };
 * @param obj
 */

export const toPairs = (obj: any) =>
  !obj
    ? []
    : isArrayLike(obj)
    ? Array.from(obj.entries())
    : Object.entries(obj);

/**
 * Break the string into words and combine them adding `_` as a separator, using a regexp.
 *
 * @param str
 */
export const toSnakeCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("_");
/**
 * Converts a string to title case.
 *
 * Break the string into words, using a regexp, and combine them capitalizing the first letter of each word and adding a whitespace between them.
 *
 * @param str
 */
export const toTitleCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");

/**
 * Applies a function against an accumulator and each key in the object (from left to right).
 *
 * Use `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator.
 *
 * @param obj
 * @param fn
 * @param acc
 */
export const transform = (obj: AnyObject, fn: Function, acc: {} = {}) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);

/**
 * Triggers a specific event on a given element, optionally passing custom data.
 *
 * Use `new CustomEvent()` to create an event from the specified `eventType` and details.
 * Use `el.dispatchEvent()` to trigger the newly created event on the given element.
 * Omit the third argument, `detail`, if you do not want to pass custom data to the triggered event.
 *
 * @param el
 * @param eventType
 * @param detail
 */
export const triggerEvent = (
  el: HTMLElementLike,
  eventType: string,
  detail: any
) =>
  el.dispatchEvent && el.dispatchEvent(new CustomEvent(eventType, { detail }));

/**
 * Truncates a string up to a specified length.
 *
 * Determine if the string's `length` is greater than `num`.
 * Return the string truncated to the desired length, with `'...'` appended to the end or the original string.
 *
 * @param str
 * @param num
 */
export const truncateString = (
  str: string,
  num: number = str.length,
  ellipsisStr = "..."
) =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;

/**
 * ellipsis a string up to a specified length.
 *
 * Determine if the string's `length` is greater than `num`.
 * Return the string truncated to the desired length, with `'...'` appended to the end or the original string.
 *
 * @param str
 * @param num
 */
export const ellipsis = (
  str: string,
  num: number = str.length,
  ellipsisStr = "..."
) =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;

/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 * Call the provided function, `fn`, with just the first argument given.
 * @param fn
 */
export const unary = (fn: Function) => (val: any) => fn(val);

/**
 * Uncurries a function up to depth `n`.
 *
 * Return a variadic function.
 * Use `Array.prototype.reduce()` on the provided arguments to call each subsequent curry level of the function.
 * If the `length` of the provided arguments is less than `n` throw an error.
 * Otherwise, call `fn` with the proper amount of arguments, using `Array.prototype.slice(0, n)`.
 * Omit the second argument, `n`, to uncurry up to depth `1`.
 * @param fn
 * @param n
 */
export const uncurry =
  (fn: Function, n = 1) =>
  (...args: any[]) => {
    const next = (acc: any) => (args: any) =>
      args.reduce((x: any, y: any) => x(y), acc);
    if (n > args.length) throw new RangeError("Arguments too few!");
    return next(fn)(args.slice(0, n));
  };

/**
 * Returns every element that exists in any of the two arrays once.
 *
 * Create a `Set` with all values of `a` and `b` and convert to an array.
 *
 * @param a
 * @param b
 */
export const union = (a: any[], b: any[]) => Array.from(new Set([...a, ...b]));

/**
 * Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.
 *
 * Create a `Set` by applying all `fn` to all values of `a`.
 * Create a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.
 * Return the last set converted to an array.
 *
 * @param a
 * @param b
 * @param fn
 */
export const unionBy = (a: any[], b: any[], fn: MapFunc) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter((x) => !s.has(fn(x)))]));
};

/**
 *
 * @param a
 * @param b
 * @param comp
 */
export const unionWith = (a: any[], b: any[], comp: Predicate) =>
  Array.from(
    new Set([...a, ...b.filter((x) => a.findIndex((y) => comp(x, y)) === -1)])
  );

/**
 * Returns all unique values in an array.
 *
 * Create a `Set` from the given array to discard duplicated values, then use the spread operator (`...`) to convert it back to an array.
 *
 * @param arr
 */
export const unique = (arr: any[]) => [...new Set(arr)];

/**
 * Returns all unique values of an array, based on a provided comparator function.
 *
 * Use `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurrence of each value, based on the comparator function, `fn`.
 * The comparator function takes two arguments: the values of the two elements being compared.
 *
 * @param arr
 * @param fn
 */
export const uniqueBy = (arr: any[], fn: Predicate) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x: any) => fn(v, x))) acc.push(v);
    return acc;
  }, []);

/**
 * Returns all unique values of an array, based on a provided comparator function, starting from the right.
 *
 * Use `Array.prototype.reduceRight()` and `Array.prototype.some()` for an array containing only the last unique occurrence of each value, based on the comparator function, `fn`.
 * The comparator function takes two arguments: the values of the two elements being compared.
 *
 * @param arr
 * @param fn
 */
export const uniqueByRight = (arr: any[], fn: Predicate) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some((x: any) => fn(v, x))) acc.push(v);
    return acc;
  }, []);

/**
 * Creates an array of arrays, ungrouping the elements in an array produced by [zip](/js/s/zip).
 *
 * Note: Provide size to make calculation faster
 *
 * Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
 * Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.
 *
 * @param arr
 * @param size
 */
export const unzip = (arr: any[], size = 0) => {
  return arr.reduce(
    (acc, val) => (val.forEach((v: any, i: number) => acc[i].push(v)), acc),
    Array.from({
      length: size || Math.max(...arr.map((x) => x.length)),
    }).map(() => [])
  );
};

/**
 * Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.
 *
 * Note: Provide size to make calculation faster
 *
 * Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
 * Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.
 * Use `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.
 *
 * @param arr
 * @param fn
 */
export const unzipWith = (arr: any[], fn: Function, size = 0) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v: any, i: number) => acc[i].push(v)), acc),
      Array.from({
        length: size || Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val: any) => fn(...val));

/**
 * Joins all given URL segments together, then normalizes the resulting URL.
 *
 * Use `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).
 *
 * @param args
 */
export const URLJoin = (...args: string[]) =>
  args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");
/**
 * Joins all given URL segments together, then normalizes the resulting URL.
 *
 * @param args
 */
export const URLJoinWithParams = (url: string, params: AnyObject) => {
  return URLJoin(url, objectToQueryString(params));
};

/**
 * Generates a UUID in a browser.
 *
 * Use `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.
 */
export const UUIDGeneratorBrowser = () =>
  (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
  );

/**
 * Returns `true` if the given value is a number, `false` otherwise.
 *
 * Use `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.
 * Use `isFinite()` to check if the number is finite.
 * Use `Number()` to check if the coercion holds.
 *
 * @param n
 */
export const validateNumber = (n: number | string) =>
  !isNaN(parseFloat(String(n))) && isFinite(Number(n)) && Number(n) == n;

/**
 * Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.
 *
 * Use `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.
 * Omit the second argument, `def` to set the default answer as `no`.
 *
 * @param val
 * @param def
 */
export const yesNo = (val: string, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
