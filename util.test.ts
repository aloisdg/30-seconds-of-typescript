import {
  assertEquals,
  assertThrows,
  assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";
import {
  accumulate,
  all,
  allEqual,
  and,
  any,
  aperture,
  approximatelyEqual,
  arrayToCSV,
  arrayToHtmlList,
  ary,
  attempt,
  attempt2,
  average,
  averageBy,
  bifurcate,
  bifurcateBy,
  binary,
  bind,
  bindAll,
  binomialCoefficient,
  both,
  call,
  capitalize,
  capitalizeEveryWord,
  castArray,
  celsiusToFahrenheit,
  chunk,
  compact,
  compactWhitespace,
  complement,
  compose,
  composeRight,
  containsWhitespace,
  contains,
  countBy,
  countOccurrences,
  createEventHub,
  CSVToArray,
  CSVToJSON,
  curry,
  dayOfYear,
  debounce,
  deepClone,
  deepFlatten,
  deepFreeze,
  deepGet,
  defaults,
  delayedPromise,
  either,
  equals,
  deepEquals,
  escapeHTML,
  escapeRegExp,
  memoize,
  factorial,
  fahrenheitToCelsius,
  filterNonUnique,
  filterNonUniqueBy,
  findKey,
  flatten,
  forEachRight,
  formatDuration,
  get,
  getAll,
  getBaseURL,
  getType,
  getURLParameters,
  groupBy,
  hasFlags,
  hexToRGB,
  hexToRGB2,
  includesAll,
  indentString,
  fillArray,
  formatDate,
  initializeArray,
  inRange,
  insertAt,
  intersection,
  intersectionBy,
  intersectionWith,
  insertAtImmutable,
  is,
  isEmpty,
  isLeapYear,
  last,
  lowercaseKeys,
  mapKeys,
  mapObject,
  mapString,
  map,
  mask,
  matches,
  matchesWith,
  maxDate,
  maxBy,
  maxN,
  merge,
  midpoint,
  minBy,
  sortBy,
  sortByKey,
  mostFrequent,
  mostPerformant,
  negate,
  nest,
  nodeListToArray,
  none,
  not,
  nthArg,
  nthElement,
  objectToQueryString,
  offset,
  omit,
  omitBy,
  or,
  orderBy,
  orderByFunc,
  pad,
  partial,
  partialRight,
  partition,
  partitionBy,
  pick,
  pickBy,
  pipeAsyncFunctions,
  pipeFunctions,
  pluralize,
  prettyBytes,
  prettyBytesT,
  promisify,
  Func,
  reduceWhich,
  removeNonASCII,
  reverseString,
  RGBToHex,
  round,
  runPromisesInSeries,
  serializeCookie,
  show,
  HTMLElementLike,
  hide,
  size,
  sleep,
  stableSort,
  sumBy,
  takeWhile,
  takeRight,
  take,
  tail,
  times,
  toCamelCase,
  humanizeUrl,
  toOrdinalSuffix,
  toPairs,
  toSnakeCase,
  transform,
  ellipsis,
  truncateString,
  unary,
  uncurry,
  unescapeHTML,
  unique,
  uniqueBy,
  uniqueByRight,
  unzip,
  unzipWith,
  URLJoin,
  URLJoinWithParams,
  UUIDGeneratorBrowser,
  yesNo,
} from "./util.ts";

// accumulate
Deno.test("accumulate #1", () => {
  assertEquals(accumulate(1, 2, 3, 4), [1, 3, 6, 10]);
  assertEquals(accumulate(...[1, 2, 3, 4]), [1, 3, 6, 10]);
});

// all
Deno.test("all #1", () => {
  assertEquals(all([1, 2, 3, 4]), true);
  assertEquals(all([2, null, 1]), false);
});

// all
Deno.test("all #2", () => {
  const hasName = (user: any) => Boolean(user.name);
  assertEquals(all([{ name: "D" }, { name: "D2" }], hasName), true);
  assertEquals(all([{ name: "D" }, { name: "" }], hasName), false);
});

// allEqual
Deno.test("allEqual #1", () => {
  assertEquals(allEqual([1, 2, 3]), false);
  assertEquals(allEqual([1, 1, 1]), true);
});

// and
Deno.test("and #1", () => {
  assertEquals(and(true, true), true);
  assertEquals(and(true, false), false);
  assertEquals(and(1, 2), true);
  assertEquals(and("1", "2"), true);
  assertEquals(and(1, 0), false);
});

// any
Deno.test("any #2", () => {
  assertEquals(
    any([1, 2, 3, 4], (x: number) => x >= 2),
    true
  );
  assertEquals(any([0, 0, 1, 0]), true);
});

// aperture
Deno.test("aperture #1", () => {
  assertEquals(aperture(2, [1, 2, 3, 4]), [
    [1, 2],
    [2, 3],
    [3, 4],
  ]);
  assertEquals(aperture(3, [1, 2, 3, 4]), [
    [1, 2, 3],
    [2, 3, 4],
  ]);
  assertEquals(aperture(5, [1, 2, 3, 4]), []);
});

// approximatelyEqual
Deno.test("approximatelyEqual #1", () => {
  assertEquals(approximatelyEqual(Math.PI / 2.0, 1.5708), true);
  assertEquals(approximatelyEqual(Math.PI / 2.0, 1.5708, 0.000001), false);
});

// arrayToCSV
Deno.test("approximatelyEqual #1", () => {
  assertEquals(
    arrayToCSV([
      ["a", "b"],
      ["c", "d"],
    ]),
    `"a","b"\n"c","d"`
  );
  assertEquals(
    arrayToCSV(
      [
        ["a", "b"],
        ["c", "d"],
      ],
      ";"
    ),
    `"a";"b"\n"c";"d"`
  );
  assertEquals(
    arrayToCSV([
      ["a", '"b" great'],
      ["c", 3.1415],
    ]),
    `"a","""b"" great"\n"c",3.1415`
  );
});

// Mock document
const elm = { innerHTML: "" };
let document = {
  elm,
  querySelector: (id: string): any => {
    return elm;
  },
};

// TODO
// // arrayToHtmlList
// Deno.test("aperture #1", () => {
//   arrayToHtmlList([1, 2, 3, "test"], "fakeid");
//   assertEquals(
//     document.elm.innerHTML,
//     `<li>1</li><li>2</li><li>3</li><li>test</li>`
//   );
//   document.elm.innerHTML = "";
//   arrayToHtmlList(["item1", "item2"], "myListID");
//   assertEquals(document.elm.innerHTML, `<li>item1</li><li>item2</li>`);
// });

// ary
Deno.test("ary #1", () => {
  const firstTwoMax = ary(Math.max, 2);
  assertEquals(
    [[2, 6, 12], [6, 4, 8], [10]].map((x) => firstTwoMax(...x)),
    [6, 6, 10]
  );
});

// attempt
Deno.test("attempt #1", () => {
  const isValidNumber = (num: number) => {
    if (num >= 0) {
      return num;
    }
    throw new Error("Invalid number");
  };
  const ten = attempt(isValidNumber, 10);
  assertEquals(ten, 10);

  const error = attempt(isValidNumber, -1);
  assertEquals(error instanceof Error, true);
  assertEquals(error.message, "Invalid number");
});

// attempt2
Deno.test("attempt2 #1", () => {
  const isValidNumber = (num: number) => {
    if (num >= 0) {
      return num;
    }
    throw new Error("Invalid number");
  };
  const [ten] = attempt2(isValidNumber, 10);
  assertEquals(ten, 10);

  const [res, error] = attempt2(isValidNumber, -1);
  assertEquals(res, null);
  assertEquals(error instanceof Error, true);
  assertEquals(error.message, "Invalid number");
});

// average
Deno.test("average #1", () => {
  assertEquals(average(1, 2, 3, 4), 2.5);
  assertEquals(average(...[1, 2, 3]), 2);
});

// averageBy
Deno.test("averageBy #1", () => {
  assertEquals(
    averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o: any) => o.n),
    5
  );
  assertEquals(averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"), 5);
});

// bifurcate
Deno.test("bifurcate #1", () => {
  assertEquals(
    bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true]),
    [["beep", "boop", "bar"], ["foo"]]
  );
});

// bifurcateBy
Deno.test("bifurcateBy #2", () => {
  const [filtered] = bifurcateBy(["beep", "boop", undefined, null, 1], Boolean);
  assertEquals(filtered, ["beep", "boop", 1]);
});

// binary
Deno.test("binary #1", () => {
  const max = binary(Math.max)(1, 2, 3);
  assertEquals(max, 2);
  assertEquals(["2", "1", "0"].map(binary(Math.max)), [2, 1, 2]);
});

// bind
Deno.test("bind #1", () => {
  const freddy = { user: "fred" };
  function greet(this: typeof freddy, greeting: string, punctuation: string) {
    return greeting + " " + this.user + punctuation;
  }
  const freddyBound = bind(greet, freddy);
  assertEquals(freddyBound("hi", "!"), "hi fred!");
});

// bindAll
Deno.test("bindAll #1", () => {
  var user = {
    first: "deepak",
    last: "V",
    getName: function () {
      return `${this.first} ${this.last}`;
    },
    getSalute: function () {
      return `Mr. ${this.last}`;
    },
  };
  bindAll(user, "getName");
  assertEquals(user.getName(), "deepak V");
  assertEquals(user.getSalute(), "Mr. V");
});

// bindAll
Deno.test("bindAll #2", () => {
  class User {
    #name = "Test";
    getName() {
      return this.#name;
    }
  }
  const user = new User();
  bindAll(user, "getName");

  const getName = user.getName;
  assertEquals(getName(), "Test");
});

// binomialCoefficient
Deno.test("binomialCoefficient #1", () => {
  const result = binomialCoefficient(8, 2);
  assertEquals(result, 28);
  assertEquals(binomialCoefficient(5, 3), 10);
});

// both
Deno.test("both #1", () => {
  const isEven = (num: number) => num % 2 === 0;
  const isPositive = (num: number) => num > 0;
  const isPositiveEven = both(isEven, isPositive);
  assertEquals(isPositiveEven(4), true);
  assertEquals(isPositiveEven(-2), false);
});

// capitalize
Deno.test("capitalize #1", () => {
  assertEquals(capitalize("fooBar"), "FooBar");
  assertEquals(capitalize("fooBar", true), "Foobar");
});

// capitalizeEveryWord
Deno.test("capitalizeEveryWord #1", () => {
  assertEquals(capitalizeEveryWord("fooBar foo"), "FooBar Foo");
});

// castArray
Deno.test("castArray #1", () => {
  assertEquals(castArray("foo"), ["foo"]);
  assertEquals(castArray([1]), [1]);
});

// celsiusToFahrenheit
Deno.test("celsiusToFahrenheit #1", () => {
  assertEquals(celsiusToFahrenheit(33), 91.4);
});

// chunk
Deno.test("chunk #1", () => {
  assertEquals(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

// compact
Deno.test("compact #1", () => {
  assertEquals(
    compact([0, 1, false, 2, "", 3, "a", Number("e") * 23, NaN, "s", 34]),
    [1, 2, 3, "a", "s", 34]
  );
});

// compactWhitespace
Deno.test("compactWhitespace #1", () => {
  assertEquals(compactWhitespace("Lorem    Ipsum"), "Lorem Ipsum");
  assertEquals(compactWhitespace("Lorem \n Ipsum"), "Lorem Ipsum");
});

// complement
Deno.test("complement #1", () => {
  const isEven = (num: number) => num % 2 === 0;
  const isOdd = complement(isEven);
  assertEquals(isOdd(2), false);
  assertEquals(isOdd(3), true);
});
// compose
Deno.test("compose #1", () => {
  const add = (x: number, y: number) => x + y;
  const add3 = (x: number) => [x + 3, 3];
  const multiply = (x: number, y: number) => x * y;
  const multiplyAndAdd3 = compose(add, add3, multiply);
  assertEquals(multiplyAndAdd3(5, 2), 16);
});

// composeRight
Deno.test("composeRight #1", () => {
  const add = (x: number, y: number) => x + y;
  const add3 = (x: number) => [x + 3, 3];
  const multiply = (x: number, y: number) => x * y;
  const multiplyAndAdd3 = composeRight(multiply, add3, add);
  assertEquals(multiplyAndAdd3(5, 2), 16);
});

// containsWhitespace
Deno.test("containsWhitespace #1", () => {
  assertEquals(containsWhitespace("lorem"), false);
  assertEquals(containsWhitespace("lorem ipsum"), true);
});

// containsWhitespace
Deno.test("contains #1", () => {
  assertEquals(contains("Text1", "Ext"), true);
  assertEquals(contains("Text1", "et"), false);
});

// countBy
Deno.test("countBy #1", () => {
  assertEquals(countBy([6.1, 4.2, 6.3], Math.floor), { 4: 1, 6: 2 });
  assertEquals(countBy(["one", "two", "three"], "length"), { 3: 2, 5: 1 });
});

// countBy
Deno.test("countBy #2", () => {
  assertEquals(
    countBy(
      [{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }],
      "name"
    ),
    { Deepak: 2, Deepak2: 1 }
  );
  assertEquals(
    countBy(
      [{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }],
      (user: any) => user.name
    ),
    { Deepak: 2, Deepak2: 1 }
  );
});

// countOccurrences
Deno.test("countOccurrences #1", () => {
  assertEquals(countOccurrences([1, 1, 2, 1, 2, 3], 1), 3);
});

// createEventHub
Deno.test("createEventHub #1", () => {
  let increment = 0;
  const numEmitter = createEventHub<number>();
  const incrementHandler = () => increment++;
  numEmitter.on("increment", incrementHandler);
  numEmitter.emit("increment");
  numEmitter.emit("increment");
  numEmitter.off("increment", incrementHandler);
  numEmitter.emit("increment");
  assertEquals(increment, 2);

  let user: User | undefined;
  interface User {
    name: string;
  }
  const userEmitter = createEventHub<User>();
  const updateUser = (u: User) => (user = u);
  userEmitter.on("update", updateUser);
  userEmitter.emit("update", { name: "Deepak" });
  assertEquals(user, { name: "Deepak" });
});

// CSVToArray
Deno.test("CSVToArray #1", () => {
  assertEquals(CSVToArray("a,b\nc,d"), [
    ["a", "b"],
    ["c", "d"],
  ]);
  assertEquals(CSVToArray("a;b\nc;d", ";"), [
    ["a", "b"],
    ["c", "d"],
  ]);
  assertEquals(CSVToArray("col1,col2\na,b\nc,d", ",", true), [
    ["a", "b"],
    ["c", "d"],
  ]);
});

// CSVToJSON
Deno.test("CSVToJSON #1", () => {
  assertEquals(CSVToJSON("col1,col2\na,b\nc,d"), [
    { col1: "a", col2: "b" },
    { col1: "c", col2: "d" },
  ]);
  assertEquals(CSVToJSON("col1;col2\na;b\nc;d", ";"), [
    { col1: "a", col2: "b" },
    { col1: "c", col2: "d" },
  ]);
});

// curry
Deno.test("curry #1", () => {
  assertEquals(curry(Math.pow)(2)(10), 1024);
  assertEquals(curry(Math.min, 3)(10)(50)(2), 2);
});

// call
Deno.test("call #1", () => {
  Promise.resolve([1, 2, 3])
    .then(call("map", (x: number) => 2 * x))
    .then((x: number[]) => assertEquals(x, [2, 4, 6]));
  const map = call.bind(null, "map");
  Promise.resolve([1, 2, 3])
    .then(map((x: number) => 2 * x))
    .then((x: number[]) => assertEquals(x, [2, 4, 6]));
});

// dayOfYear
Deno.test("dayOfYear #1", () => {
  assertEquals(dayOfYear(new Date(2020, 5, 28)), 180);
  assertEquals(dayOfYear("2020-06-28T10:46:39.856Z"), 180);
  assertThrows(
    () => {
      dayOfYear("2020-06-28T1s");
    },
    Error,
    "Invalid Date string"
  );
});
// debounce
Deno.test("debounce #1", async () => {
  let counter = 0;
  const updateState = () => {
    counter++;
  };
  const debouncedUpdate = debounce(updateState);
  debouncedUpdate();
  debouncedUpdate();
  await delayedPromise();
  assertEquals(counter, 1);
  debouncedUpdate();
  await delayedPromise();
  assertEquals(counter, 2);
});

// deepClone
Deno.test("deepClone #1", () => {
  const a = { foo: "bar", obj: { a: 1, b: 2 }, arr: [1, 2, 3] };
  const b = deepClone(a);
  assertEquals(a.foo, b.foo);
  assertEquals(a === b, false);
  assertEquals(a.obj, b.obj);
  assertEquals(a.arr, b.arr);
});

// deepFlatten
Deno.test("deepFlatten #1", () => {
  assertEquals(deepFlatten([1, [2], [[3], 4], 5]), [1, 2, 3, 4, 5]);
  assertEquals(
    deepFlatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  );
});

// deepFreeze
Deno.test("deepFreeze #1", () => {
  const o = deepFreeze([1, [2, 3]]);
  assertThrows(
    () => {
      (o as any)[0] = 3;
    },
    TypeError,
    "Cannot assign to read only property '0' of object '[object Array]'"
  );
  assertThrows(
    () => {
      (o as any)[1][1] = 4;
    },
    TypeError,
    "Cannot assign to read only property '1' of object '[object Array]'"
  );
});

// deepGet
Deno.test("deepGet #1", () => {
  let index = 2;
  const data = {
    foo: {
      foz: [1, 2, 3],
      bar: {
        baz: ["a", "b", "c"],
      },
    },
  };
  assertEquals(deepGet(data, ["foo", "foz", index]), 3);
  assertEquals(deepGet(data, ["foo", "bar", "baz", 8, "foz"]), undefined);
  assertEquals(deepGet(data, "foo.foz.2"), 3);
  assertEquals(deepGet(data, "foo->foz->2", null, "->"), 3);
  assertEquals(deepGet(data, "foo.bar.baz.8.foz", null), null);
});

// defaults
Deno.test("defaults #1", () => {
  assertEquals(defaults({ a: 1 }, { b: 2 }, { a: 3 }), { a: 1, b: 2 });
  const props = {
    style: {
      width: 100,
      color: "black",
    },
  };
  let style = defaults(props.style, { height: 200, backgroundColor: "grey" });
  assertEquals(style, {
    width: 100,
    color: "black",
    height: 200,
    backgroundColor: "grey",
  });
});

// // delay
// Deno.test("delay #1", () => {

//   assertEquals(delay, true);
// });

// either
Deno.test("either #1", () => {
  const isEven = (num: number) => num % 2 === 0;
  const isPositive = (num: number) => num > 0;
  const isPositiveOrEven = either(isPositive, isEven);
  assertEquals(isPositiveOrEven(4), true);
  assertEquals(isPositiveOrEven(3), true);
  interface User {
    name: string;
    age: number;
  }
  const user1: User = {
    name: "deepak",
    age: 18,
  };
  const user2: User = {
    name: "Martha",
    age: 21,
  };
  const isDeepak = (u: User) => u.name === "deepak";
  const isAdult = (minAge: number, u: User) => u.age > minAge;
  assertEquals(either(isDeepak, isAdult.bind(null, 18))(user1), true);
  assertEquals(either(isDeepak, isAdult.bind(null, 21))(user2), false);
});

// equals
Deno.test("equals #1", () => {
  assertEquals(
    equals(
      { a: [2, { e: 3 }], b: [4], c: "foo" },
      { a: [2, { e: 3 }], b: [4], c: "foo" }
    ),
    true
  );
  // assertEquals(equals(1, "1"), true);// compile error
  assertEquals(deepEquals(1, "1"), false);
});

// escapeHTML
Deno.test("escapeHTML #1", () => {
  assertEquals(
    escapeHTML('<a href="#">Me & you</a>'),
    "&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;"
  );
});

// escapeRegExp
Deno.test("escapeRegExp #1", () => {
  assertEquals(escapeRegExp("(test)"), "\\(test\\)");
});

// factorial
Deno.test("factorial #1", () => {
  assertEquals(factorial(6), 720);
});

// memoize
Deno.test("memoize #1", () => {
  const factorialCache = memoize(factorial);
  assertEquals(factorialCache(70), Number("1.197857166996989e+100"));
  assertEquals(factorialCache(70), Number("1.197857166996989e+100"));
});

// fahrenheitToCelsius
Deno.test("fahrenheitToCelsius #1", () => {
  assertEquals(fahrenheitToCelsius(32), 0);
});

// filterNonUnique
Deno.test("filterNonUnique #1", () => {
  assertEquals(filterNonUnique<number>([1, 2, 2, 3, 4, 4, 5]), [1, 3, 5]);
  assertEquals(filterNonUnique([1, 2, 2, 3, 4, 4, 5, "s"]), [1, 3, 5, "s"]);
  assertEquals(filterNonUnique<number | string>([1, 2, 2, 3, 4, 4, 5, "s"]), [
    1,
    3,
    5,
    "s",
  ]);
});

// filterNonUniqueBy
Deno.test("filterNonUniqueBy #1", () => {
  assertEquals(
    filterNonUniqueBy(
      [
        { id: 0, value: "a" },
        { id: 1, value: "b" },
        { id: 2, value: "c" },
        { id: 1, value: "d" },
        { id: 0, value: "e" },
      ],
      (a, b) => a.id == b.id
    ),
    [{ id: 2, value: "c" }]
  );
});

// findKey
Deno.test("findKey #1", () => {
  assertEquals(
    findKey(
      {
        barney: { age: 36, active: true },
        fred: { age: 40, active: false },
        pebbles: { age: 1, active: true },
      },
      (o: any) => o["active"]
    ),
    "barney"
  );
});

// flatten
Deno.test("flatten #1", () => {
  assertEquals(flatten([1, [2], 3, 4, 5]), [1, 2, 3, 4, 5]);
  assertEquals(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2), [
    1,
    2,
    3,
    [4, 5],
    6,
    7,
    8,
  ]);
});

// forEachRight
Deno.test("forEachRight #1", () => {
  let count = 0;
  forEachRight([1, 2, 3, 4], (val: number, index: number, arr: number[]) => {
    assertEquals(val - 1, index);
    assertEquals(4 - ++count, index);
  });
});

// formatDuration
Deno.test("formatDuration #1", () => {
  assertEquals(formatDuration(1001), "1 second, 1 millisecond");
  assertEquals(
    formatDuration(34325055574),
    "397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds"
  );
});

// get
Deno.test("get #1", () => {
  const obj = {
    selector: { to: { val: "val to select" } },
    target: [1, 2, { a: "test" }],
  };
  assertEquals(get(obj, "selector.to.val"), "val to select");
  assertEquals(get(obj, "selector.to1.val", null), null);
  assertEquals(get(obj, "selector.to1.val"), undefined);
});

// getAll
Deno.test("getAll #1", () => {
  const obj = {
    selector: { to: { val: "val to select" } },
    target: [1, 2, { a: "test" }],
  };
  assertEquals(getAll(obj, "selector.to.val", "target[0]", "target[2].a"), [
    "val to select",
    1,
    "test",
  ]);
});

// getBaseURL
Deno.test("getBaseURL #1", () => {
  assertEquals(
    getBaseURL("http://url.com/page?name=Adam&surname=Smith"),
    "http://url.com/page"
  );
});

// getType
Deno.test("getType #1", () => {
  assertEquals(getType(new Set([1, 2, 3])), "set");
  assertEquals(getType(null), "null");
  assertEquals(getType(Deno), "object");
});

// getURLParameters
Deno.test("getURLParameters #1", () => {
  assertEquals(getURLParameters("google.com"), {});
  assertEquals(
    getURLParameters("http://url.com/page?name=Adam&surname=Smith&surname=Sm"),
    { name: "Adam", surname: ["Smith", "Sm"] }
  );
  assertEquals(
    getURLParameters(
      "http://url.com/page?name=Adam&surname=Smith&surname=Sm&surname=Tm"
    ),
    { name: "Adam", surname: ["Smith", "Sm", "Tm"] }
  );
  assertEquals(
    getURLParameters("http://url.com/page?name=Adam&surname=Smith"),
    { name: "Adam", surname: "Smith" }
  );
  assertEquals(getURLParameters("google.com"), {});
});

// groupBy
Deno.test("groupBy #1", () => {
  assertEquals(groupBy(["one", "two", "three"], "length"), {
    3: ["one", "two"],
    5: ["three"],
  });
  assertEquals(groupBy([6.1, 4.2, 6.3], Math.floor), {
    4: [4.2],
    6: [6.1, 6.3],
  });
});

// hasFlags
Deno.test("hasFlags #1", () => {
  // node myScript.js -s --test --cool=true
  const process = {
    argv: ["-s", "--test", "--cool=true"],
  };
  assertEquals(hasFlags(process.argv, "-s"), true);
  assertEquals(hasFlags(process.argv, "--test", "cool=true", "-s"), true);
  assertEquals(hasFlags(process.argv, "special"), false);

  const processHasFlags = curry(hasFlags, 2)(process.argv);
  assertEquals(processHasFlags("-s"), true);
  assertEquals(processHasFlags("--tests"), false);
});

// hexToRGB
Deno.test("hexToRGB #1", () => {
  assertEquals(hexToRGB("#27ae60ff"), `rgba(39, 174, 96, 255)`);
  assertEquals(hexToRGB("#27ae60"), `rgb(39, 174, 96)`);
  assertEquals(hexToRGB("#fff"), `rgb(255, 255, 255)`);
});

// hexToRGB2
Deno.test("hexToRGB2 #1", () => {
  assertEquals(hexToRGB2("#27ae60ff"), `rgba(39, 174, 96, 255)`);
  assertEquals(hexToRGB2("#27ae60"), `rgb(39, 174, 96)`);
  assertEquals(hexToRGB2("#fff"), `rgb(255, 255, 255)`);
});

// includesAll
Deno.test("includesAll #1", () => {
  assertEquals(includesAll([1, 2, 3, 4], [1, 4]), true);
  assertEquals(includesAll([1, 2, 3, 4], [1, 5]), false);
});

// indentString
Deno.test("indentString #1", () => {
  assertEquals(indentString("Lorem\nIpsum", 2), "  Lorem\n  Ipsum");
  assertEquals(indentString("Lorem\nIpsum", 2, "_"), "__Lorem\n__Ipsum");
});

// fillArray
Deno.test("fillArray #1", () => {
  assertEquals(fillArray(3, 1), [1, 1, 1]);
  assertEquals(fillArray(3), [0, 0, 0]);
  assertEquals(initializeArray(3), [0, 0, 0]);
});

// inRange
Deno.test("inRange #1", () => {
  assertEquals(inRange(3, 2, 5), true);
  assertEquals(inRange(3, 4), true);
  assertEquals(inRange(2, 3, 5), false);
  assertEquals(inRange(3, 2), false);

  assertEquals(
    inRange(new Date(2020, 5, 1), new Date(2020, 4, 12), new Date(2020, 6, 12)),
    true
  );
  assertEquals(
    inRange(
      new Date(2020, 5, 12),
      new Date(2020, 6, 12),
      new Date(2020, 8, 12)
    ),
    false
  );

  assertEquals(inRange("d", "a", "h"), true);
  assertEquals(inRange("d", "e", "h"), false);
});

// insertAtImmutable
Deno.test("insertAtImmutable #1", () => {
  assertEquals(insertAtImmutable([1, 2, 3, 4], 2, 5), [1, 2, 3, 5, 4]);
  assertEquals(insertAtImmutable([2, 10], 0, 4, 6, 8), [2, 4, 6, 8, 10]);
  assertEquals(insertAtImmutable([4, 5], -1, 1, 2, 3), [1, 2, 3, 4, 5]);
});

// insertAtMut
Deno.test("insertAtMut #1", () => {
  const arr = [1, 2, 3, 4];
  const mutArr = insertAt(arr, 2, 5);
  assertEquals(mutArr, [1, 2, 3, 5, 4]);
  assertEquals(arr === mutArr, true);
});

// intersection
Deno.test("intersection #1", () => {
  assertEquals(intersection([1, 2, 3], [4, 3, 2]), [2, 3]);
});

// intersectionBy
Deno.test("intersectionBy #1", () => {
  assertEquals(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor), [2.1]);
});

// intersectionWith
Deno.test("intersectionWith #1", () => {
  assertEquals(
    intersectionWith(
      [1, 1.2, 1.5, 3, 0],
      [1.9, 3, 0, 3.9],
      (a, b) => Math.round(a) === Math.round(b)
    ),
    [1.5, 3, 0]
  );
});

// is
Deno.test("is #1", () => {
  assertEquals(is(Array, [1]), true);
  assertEquals(is(ArrayBuffer, new ArrayBuffer(0)), true);
  assertEquals(is(Map, new Map()), true);
  assertEquals(is(RegExp, /./g), true);
  assertEquals(is(Set, new Set()), true);
  assertEquals(is(WeakMap, new WeakMap()), true);
  assertEquals(is(WeakSet, new WeakSet()), true);
  assertEquals(is(String, ""), true);
  assertEquals(is(String, new String("")), true);
  assertEquals(is(Number, 1), true);
  assertEquals(is(Number, new Number(1)), true);
  assertEquals(is(Boolean, true), true);
  assertEquals(is(Boolean, new Boolean(true)), true);

  assertEquals(is("Array", [1]), true);
  assertEquals(is("ArrayBuffer", new ArrayBuffer(0)), true);
  assertEquals(is("Map", new Map()), true);
  assertEquals(is("RegExp", /./g), true);
  assertEquals(is("Set", new Set()), true);
  assertEquals(is("WeakMap", new WeakMap()), true);
  assertEquals(is("WeakSet", new WeakSet()), true);
  assertEquals(is("String", ""), true);
  assertEquals(is("String", new String("")), true);
  assertEquals(is("Number", 1), true);
  assertEquals(is("Number", new Number(1)), true);
  assertEquals(is("Boolean", true), true);
  assertEquals(is("Boolean", new Boolean(true)), true);
});

// isEmpty
Deno.test("isEmpty #1", () => {
  assertEquals(isEmpty([]), true);
  assertEquals(isEmpty({}), true);
  assertEquals(isEmpty(""), true);
  assertEquals(isEmpty([1, 2]), false);
  assertEquals(isEmpty({ a: 1, b: 2 }), false);
  assertEquals(isEmpty("text"), false);
  assertEquals(isEmpty(123), true);
  assertEquals(isEmpty(true), true);
});

// isLeapYear
Deno.test("isLeapYear #1", () => {
  assertEquals(isLeapYear(2019), false);
  assertEquals(isLeapYear(2020), true);
});

// last
Deno.test("last #1", () => {
  assertEquals(last([1, 2, 3]), 3);
  assertEquals(last([]), undefined);
  assertEquals(last([null]), null);
  assertEquals(last(undefined), undefined);
});

// lowercaseKeys
Deno.test("lowercaseKeys #1", () => {
  assertEquals(lowercaseKeys({ Name: "Adam", sUrnAME: "Smith" }), {
    name: "Adam",
    surname: "Smith",
  });
  assertEquals(
    lowercaseKeys({ Name: "Adam", adDress: { Pin: 700000 } }, true),
    { name: "Adam", address: { pin: 700000 } }
  );
});
// mapKeys
Deno.test("mapKeys #1", () => {
  assertEquals(
    mapKeys({ a: 1, b: 2 }, (val, key) => key + val),
    { a1: 1, b2: 2 }
  );
});

// mapObject
Deno.test("mapObject #1", () => {
  assertEquals(
    mapObject([1, 2, 3], (a) => a * a),
    { 1: 1, 2: 4, 3: 9 }
  );
});

// mapString
Deno.test("mapString #1", () => {
  assertEquals(
    mapString("lorem ipsum", (c) => c.toUpperCase()),
    "LOREM IPSUM"
  );
});

// map
Deno.test("map #1", () => {
  assertEquals(
    map("lorem ipsum", (c) => c.toUpperCase()).join(""),
    "LOREM IPSUM"
  );
  assertEquals(
    map([1, 2, 3, 4], (c) => c * c),
    [1, 4, 9, 16]
  );
});

// mask
Deno.test("mask #1", () => {
  assertEquals(mask(1234567890), "******7890");
  assertEquals(mask(1234567890, 3), "*******890");
  assertEquals(mask(1234567890, -4, "$"), "$$$$567890");
});

// matches
Deno.test("matches #1", () => {
  assertEquals(
    matches(
      { age: 25, hair: "long", beard: true },
      { hair: "long", beard: true }
    ),
    true
  );
  assertEquals(
    matches(
      { hair: "long", beard: true },
      { age: 25, hair: "long", beard: true }
    ),
    false
  );
});

// matchesWith
Deno.test("matchesWith #1", () => {
  const isGreeting = (val: string) => /^h(?:i|ello)$/.test(val);
  assertEquals(
    matchesWith(
      { greeting: "hello" },
      { greeting: "hi" },
      (oV: string, sV: string) => isGreeting(oV) && isGreeting(sV)
    ),
    true
  );
});

// maxDate
Deno.test("maxDate #1", () => {
  const array = [
    new Date(2017, 4, 13),
    new Date(2018, 2, 12),
    new Date(2016, 0, 10),
    new Date(2016, 0, 9),
  ];
  assertEquals(maxDate(array).toDateString(), "Mon Mar 12 2018");
});

// maxBy
Deno.test("maxBy #1", () => {
  const array = [
    new Date(2017, 4, 13),
    new Date(2018, 2, 12),
    new Date(2016, 0, 10),
    new Date(2016, 0, 9),
  ];
  const timestamp = maxBy(array, (date) => date.getTime());
  assertEquals(new Date(timestamp).toDateString(), "Mon Mar 12 2018");

  assertEquals(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"), 8);
});

// maxN
Deno.test("maxN #1", () => {
  assertEquals(maxN([1, 2, 3]), [3]);
  assertEquals(maxN([1, 2, 3], 2), [3, 2]);
  assertEquals(maxN([1, 2, 3], 2, -1), [1, 2]);
});

// merge
Deno.test("merge #1", () => {
  const object = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1,
  };
  const other = {
    a: { z: 3 },
    b: [2, 3],
    c: "foo",
  };
  assertEquals(merge(object, other), {
    a: [{ x: 2 }, { y: 4 }, { z: 3 }],
    b: [1, 2, 3],
    c: "foo",
  });
});

// midpoint
Deno.test("midpoint #1", () => {
  assertEquals(midpoint([2, 2], [4, 4]), [3, 3]);
  assertEquals(midpoint([4, 4], [6, 6]), [5, 5]);
  assertEquals(midpoint([1, 3], [2, 4]), [1.5, 3.5]);
});

// minBy
Deno.test("minBy #1", () => {
  assertEquals(
    minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n),
    2
  );
  assertEquals(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"), 2);
});

// sortBy
Deno.test("sortBy #1", () => {
  assertEquals(sortBy([1, 2, 4, 3, 4, -1]), [-1, 1, 2, 3, 4, 4]);
  assertEquals(sortBy([1, 2, 4, 3, 4, -1], undefined, -1), [4, 4, 3, 2, 1, -1]);
  assertEquals(sortBy(["Test", "test"]), ["test", "Test"]);
  assertEquals(
    sortBy([{ name: "02" }, { name: "01" }], (s1: any, s2: any) =>
      s1.name.localeCompare(s2.name)
    ),
    [{ name: "01" }, { name: "02" }]
  );
});
// sortByKey
Deno.test("sortByKey #1", () => {
  assertEquals(sortByKey([{ name: "02" }, { name: "01" }], "name"), [
    { name: "01" },
    { name: "02" },
  ]);
  assertEquals(sortByKey([{ name: "02" }, { name: "01" }], "name", -1), [
    { name: "02" },
    { name: "01" },
  ]);
});

// mostFrequent
Deno.test("mostFrequent #1", () => {
  assertEquals(mostFrequent(["a", "b", "a", "c", "a", "a", "b"]), "a");
  assertEquals(mostFrequent(["1", "11", "2", 1, 2, "3", "1"]), "1");
});

// mostPerformant
Deno.test("mostPerformant #1", () => {
  assertEquals(
    mostPerformant([
      () => {
        // 10x time iterate
        fillArray(10000, "1").every((el) => typeof el === "number");
      },
      () => {
        fillArray(1000, "2").every((el) => typeof el === "number");
      },
    ]),
    1
  );
});

// negate
Deno.test("negate #1", () => {
  assertEquals(
    [1, 2, 3, 4, 5, 6].filter(negate((n: number) => n % 2 === 0)),
    [1, 3, 5]
  );
});

// nest
Deno.test("nest #1", () => {
  const comments = [
    { id: 1, parent_id: null },
    { id: 2, parent_id: 1 },
    { id: 3, parent_id: 1 },
    { id: 4, parent_id: 2 },
    { id: 5, parent_id: 4 },
  ];
  const nestedComments = nest(comments);
  assertEquals(nestedComments[0].children[0].children[0].id, 4);
});

// nodeListToArray
Deno.test("nodeListToArray #1", () => {
  const caps = (x: string) => x.toUpperCase();
  assertEquals(nodeListToArray("caps").map(caps), ["C", "A", "P", "S"]);
});

// none
Deno.test("none #1", () => {
  assertEquals(
    none([0, 1, 3, 0], (x) => x == 2),
    true
  );
  assertEquals(none([0, 0, 0]), true);
});

// not
Deno.test("not #1", () => {
  assertEquals(not(false), true);
  assertEquals(not(undefined), true);
  assertEquals(not(null), true);
});

// nthArg
Deno.test("nthArg #1", () => {
  const third = nthArg(2);
  const last = nthArg(-1);
  assertEquals(third(1, 2, 3), 3);
  assertEquals(last(1, 2, 3, 4, 5), 5);
});

// nthElement
Deno.test("nthElement #1", () => {
  const third = nthElement(2);
  const last = nthElement(-1);
  assertEquals(third([1, 2, 3]), 3);
  assertEquals(last([1, 2, 3, 4, 5]), 5);

  assertEquals(nthElement(-2, [1, 2, 3, 4, 5]), 4);
});

// objectToQueryString
Deno.test("objectToQueryString #1", () => {
  assertEquals(
    objectToQueryString({ page: "1", size: "2kg", key: undefined }),
    "?page=1&size=2kg"
  );
});

// offset
Deno.test("offset #1", () => {
  assertEquals(offset([1, 2, 3, 4, 5], 2), [3, 4, 5, 1, 2]);
  assertEquals(offset([1, 2, 3, 4, 5], -2), [4, 5, 1, 2, 3]);
});

// omit
Deno.test("omit #1", () => {
  assertEquals(omit({ a: 1, b: "2", c: 3 }, ["b"]), { a: 1, c: 3 });
});

// omitBy
Deno.test("omitBy #1", () => {
  assertEquals(
    omitBy({ a: 1, b: "2", c: 3 }, (x: any) => typeof x === "number"),
    { b: "2" }
  );
});

// or
Deno.test("or #1", () => {
  assertEquals(or(true, true), true);
  assertEquals(or(true, false), true);
  assertEquals(or(false, false), false);
});

// orderBy
Deno.test("orderBy #1", () => {
  const users = [
    { name: "fred", age: 48 },
    { name: "barney", age: 36 },
    { name: "fred", age: 40 },
  ];
  assertEquals(orderBy(users, ["name", "age"], ["asc", "desc"]), [
    { name: "barney", age: 36 },
    { name: "fred", age: 48 },
    { name: "fred", age: 40 },
  ]);
  assertEquals(orderBy(users, ["name", "age"]), [
    { name: "barney", age: 36 },
    { name: "fred", age: 40 },
    { name: "fred", age: 48 },
  ]);
});

// orderBy
Deno.test("orderBy #1", () => {
  const users = [
    { name: "fred", age: 48 },
    { name: "barney", age: 36 },
    { name: "fred", age: 40 },
  ];
  assertEquals(
    orderByFunc(
      users,
      ["name", "age"],
      <T extends string | number>(p1: T, p2: T, prop: string) => {
        if (prop === "name") return String(p1).localeCompare(String(p2));
        if (prop === "age") return Number(p2) - Number(p1);
      }
    ),
    [
      { name: "barney", age: 36 },
      { name: "fred", age: 48 },
      { name: "fred", age: 40 },
    ]
  );
});

// pad
Deno.test("pad #1", () => {
  assertEquals(pad("cat", 8), "  cat   ");
  assertEquals(pad(String(42), 6, "0"), "004200");
  assertEquals(pad("foobar", 3), "foobar");
});

// partial
Deno.test("partial #1", () => {
  const greet = (greeting: string, name: string) => greeting + " " + name + "!";
  const greetHello = partial(greet, "Hello");
  assertEquals(greetHello("John"), "Hello John!");
});
// partialRight
Deno.test("partialRight #1", () => {
  const greet = (name: string, greeting: string) => greeting + " " + name + "!";
  const greetHello = partialRight(greet, "Hello");
  assertEquals(greetHello("John"), "Hello John!");
});

// partition
Deno.test("partition #1", () => {
  const users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: true },
  ];
  assertEquals(
    partition(users, (o) => o.active),
    [
      [{ user: "fred", age: 40, active: true }],
      [{ user: "barney", age: 36, active: false }],
    ]
  );
});

// partitionBy
Deno.test("partitionBy #1", () => {
  const numbers = [1, 1, 3, 3, 4, 5, 5, 5];
  assertEquals(
    partitionBy(numbers, (n) => n % 2 === 0),
    [[1, 1, 3, 3], [4], [5, 5, 5]]
  );
  assertEquals(
    partitionBy(numbers, (n) => n),
    [[1, 1], [3, 3], [4], [5, 5, 5]]
  );
});

// pick
Deno.test("pick #1", () => {
  assertEquals(pick({ a: 1, b: "2", c: 3 }, ["a", "c"]), { a: 1, c: 3 });
  assertEquals(
    pickBy({ a: 1, b: "2", c: 3 }, (x: any) => typeof x === "number"),
    { a: 1, c: 3 }
  );
});

// pipeAsyncFunctions
Deno.test("pipeAsyncFunctions #1", async () => {
  const sum = pipeAsyncFunctions(
    (x) => x + 1,
    (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
    (x) => x + 3,
    async (x) => (await x) + 4
  );
  assertEquals(await sum(5), 15);
});

// pipeFunctions
Deno.test("pipeFunctions #1", () => {
  const add5 = (x: number) => x + 5;
  const multiply = (x: number, y: number) => x * y;
  const multiplyAndAdd5 = pipeFunctions(multiply, add5);
  assertEquals(multiplyAndAdd5(5, 2), 15);
});

// pluralize
Deno.test("pluralize #1", () => {
  assertEquals(pluralize(0, "apple"), "apples");
  assertEquals(pluralize(1, "apple"), "apple");
  assertEquals(pluralize(2, "apple"), "apples");
  assertEquals(pluralize(2, "person", "people"), "people");
});

// prettyBytes
Deno.test("prettyBytes #1", () => {
  assertEquals(prettyBytes(1000), "1 KB");
  assertEquals(prettyBytes(-27145424323.5821, 5), "-27.145 GB");
  assertEquals(prettyBytes(123456789, 3, ""), "123MB");
  assertEquals(prettyBytes(123456789, 3, "_"), "123_MB");

  assertEquals(prettyBytesT`${-27145424323.5821}${5}`, "-27.145GB");
  assertEquals(prettyBytesT`${123456789} ${3}`, "123 MB");
  assertEquals(prettyBytesT`${123456789}_${3}`, "123_MB");
});
// promisify
Deno.test("promisify #1", async () => {
  const delay = promisify((d: number, cb: Func) =>
    setTimeout(cb, d, new Error("WRONG FILE"))
  );
  try {
    await delay(200);
  } catch (error) {
    assertEquals(error.message, "WRONG FILE");
  }
});

// reduceWhich
Deno.test("reduceWhich #1", () => {
  assertEquals(
    reduceWhich([1, 3, 2], (a: number, b: number) => b - a),
    3
  );
  assertEquals(reduceWhich([1, 3, 2]), 1);
  assertEquals(
    reduceWhich(
      [
        { name: "Tom", age: 12 },
        { name: "Jack", age: 18 },
        { name: "Lucy", age: 9 },
      ],
      (a: any, b: any) => a.age - b.age
    ),
    { name: "Lucy", age: 9 }
  );
});

// removeNonASCII
Deno.test("removeNonASCII #1", () => {
  assertEquals(removeNonASCII("äÄçÇéÉêlorem-ipsumöÖÐþúÚ"), "lorem-ipsum");
});

// reverseString
Deno.test("reverseString #1", () => {
  assertEquals(reverseString("foobar"), "raboof");
});

// RGBToHex
Deno.test("RGBToHex #1", () => {
  assertEquals(RGBToHex(255, 165, 1), "ffa501");
  assertEquals(RGBToHex(255, 165, 1, "#"), "#ffa501");
});

// round
Deno.test("round #1", () => {
  assertEquals(round(1.005, 2), 1.01);
});

const delay = (d: number) =>
  new Promise((r) => setTimeout(() => r(10), d)) as Promise<number>;

// runPromisesInSeries
Deno.test("runPromisesInSeries #1", async () => {
  const data = await runPromisesInSeries([() => delay(100), () => delay(200)]);
  assertEquals(data, 10);
});

// serializeCookie
Deno.test("serializeCookie #1", () => {
  assertEquals(serializeCookie("foo", "bar"), "foo=bar");
});

// show
Deno.test("show #1", () => {
  let el: HTMLElementLike = {
    style: {
      display: "block",
    },
  };
  show(el);
  assertEquals(el.style.display, "");
});

// hide
Deno.test("hide #1", () => {
  let el: HTMLElementLike = {
    style: {
      display: "",
    },
  };
  hide(el);
  assertEquals(el.style.display, "none");
});

// size
Deno.test("size #1", () => {
  assertEquals(size([1, 2, 3, 4, 5]), 5);
  assertEquals(size("size"), 4);
  assertEquals(size({ one: 1, two: 2, three: 3 }), 3);
});

// sleep
Deno.test("sleep #1", async () => {
  await sleep(200);
  console.log("I woke up after 200ms.");
});

// stableSort
Deno.test("stableSort #1", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const stable = stableSort(arr, () => 0);
  assertEquals(stable, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// sumBy
Deno.test("sumBy #1", () => {
  assertEquals(
    sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n),
    20
  );
  assertEquals(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"), 20);
});

// takes
Deno.test("takes #1", () => {
  assertEquals(tail([1, 2, 3]), [2, 3]);
  assertEquals(take([1, 2, 3], 5), [1, 2, 3]);
  assertEquals(take([1, 2, 3], 0), []);

  assertEquals(takeRight([1, 2, 3], 2), [2, 3]);
  assertEquals(takeRight([1, 2, 3]), [3]);
  assertEquals(
    takeWhile([1, 2, 3, 4], (n) => n >= 3),
    [1, 2]
  );
});

// times
Deno.test("times #1", () => {
  var output = "";
  const result = times(5, (i: string) => (output += i));
  assertEquals(output, "01234");
  assertEquals(result, "01234");
});

// toCamelCase
Deno.test("toCamelCase #1", () => {
  assertEquals(
    toCamelCase("some_database_field_name"),
    "someDatabaseFieldName"
  );
  assertEquals(
    toCamelCase("Some label that needs to be camelized"),
    "someLabelThatNeedsToBeCamelized"
  );
  assertEquals(
    toCamelCase("some-javascript-property"),
    "someJavascriptProperty"
  );
  assertEquals(
    toCamelCase("some-mixed_string with spaces_underscores-and-hyphens"),
    "someMixedStringWithSpacesUnderscoresAndHyphens"
  );
});

// // toCurrency
// Deno.test("toCurrency #1", () => {
//   assertEquals(toCurrency(123456.789, "EUR"), "€123,456.79"),   | currency: Euro | currencyLangFormat: Local);
//   assertEquals(toCurrency(123456.789, "USD", "en-us"), " $123,456.79 "),   | currency: US Dollar | currencyLangFormat: English (United States));
//   assertEquals(toCurrency(123456.789, "USD", "fa"), " ۱۲۳٬۴۵۶٫۷۹ ؜$ "),  | currency: US Dollar | currencyLangFormat: Farsi);
//   assertEquals(toCurrency(322342436423.2435, "JPY"), " ¥322,342,436,423"),   | currency: Japanese Yen | currencyLangFormat: Local);
//   assertEquals(
//     toCurrency(322342436423.2435, "JPY", "fi"),
//     " 322 342 436 423 ¥"
//   ),   | currency: Japanese Yen | currencyLangFormat: Finnish);
//   assertEquals(toCurrency, true);
// });

// humanizeUrl
Deno.test("humanizeUrl #1", () => {
  assertEquals(humanizeUrl("Some label URL"), "some-label-url");
  assertEquals(humanizeUrl("Some 1label 2URL"), "some-1label-2url");
  assertEquals(humanizeUrl("Some 1_label 2_URL"), "some-1-label-2-url");
  assertEquals(humanizeUrl("Some$1_label$ $2URL"), "some-1-label-2url");

  assertEquals(humanizeUrl("Some 1_label 2_URL", true), "some-1_label-2_url");
  assertEquals(
    humanizeUrl("Some$1_label$ $2URL", false, true),
    "Some-1-label-2URL"
  );
});

// toOrdinalSuffix
Deno.test("toOrdinalSuffix #1", () => {
  assertEquals(toOrdinalSuffix("123"), "123rd");
});
// toPairs
Deno.test("toPairs #1", () => {
  assertEquals(toPairs([2, 4, 8]), [
    [0, 2],
    [1, 4],
    [2, 8],
  ]);
  assertEquals(toPairs("shy"), [
    ["0", "s"],
    ["1", "h"],
    ["2", "y"],
  ]);
  assertEquals(toPairs(new Set(["a", "b", "c", "a"])), [
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
  ]);
  assertEquals(toPairs({ a: 1, b: 2 }), [
    ["a", 1],
    ["b", 2],
  ]);
  assertEquals(toPairs(undefined), []);
  assertEquals(toPairs(null), []);
  assertEquals(toPairs(true), []);
  assertEquals(toPairs(false), []);
});
// toSnakeCase
Deno.test("toSnakeCase #1", () => {
  assertEquals(toSnakeCase("camelCase"), "camel_case");
  assertEquals(toSnakeCase("some text"), "some_text");
  assertEquals(
    toSnakeCase("some-mixed_string With spaces_underscores-and-hyphens"),
    "some_mixed_string_with_spaces_underscores_and_hyphens"
  );
  assertEquals(toSnakeCase("AllThe-small Things"), "all_the_small_things");
  assertEquals(
    toSnakeCase(
      "IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML"
    ),
    "i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html"
  );
  const word = "IAmListeningToFMWhileLoading";
  const humanizeUrlWordBreak = (str: string) =>
    humanizeUrl(toSnakeCase(str) || "");
  assertEquals(
    humanizeUrlWordBreak(word),
    "i-am-listening-to-fm-while-loading"
  );
});

// transform
Deno.test("transform #1", () => {
  assertEquals(
    transform(
      { a: 1, b: 2, c: 1 },
      (r: any, v: string, k: any) => {
        (r[v] || (r[v] = [])).push(k);
        return r;
      },
      {}
    ),
    { "1": ["a", "c"], "2": ["b"] }
  );
});

// ellipsis
Deno.test("ellipsis #1", () => {
  assertEquals(truncateString("boomerang", 7), "boom...");
  assertEquals(ellipsis("boomerang", 7), "boom...");
  assertEquals(ellipsis("boomerang", 2), "bo...");
  assertEquals(ellipsis("boomerang", 5), "bo...");
  assertEquals(ellipsis("boomerang", 5), "bo...");

  assertEquals(ellipsis("boomerang", 5, ".."), "boo..");
  assertEquals(ellipsis("boomerang"), "boomer...");

  assertEquals(ellipsis("boomerang", undefined, "♦♦♦"), "boomer♦♦♦");
});

// unary
Deno.test("unary #1", () => {
  const parseIntMapper = unary(parseInt);
  assertEquals(["6", "8", "10"].map(parseIntMapper), [6, 8, 10]);
});

// uncurried
Deno.test("uncurried #1", () => {
  const add = (x: number) => (y: number) => (z: number) => x + y + z;
  const uncurriedAdd = uncurry(add, 3);
  assertEquals(uncurriedAdd(1, 2, 3), 6);
});

// unescapeHTML
Deno.test("unescapeHTML #1", () => {
  assertEquals(
    unescapeHTML("&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;"),
    '<a href="#">Me & you</a>'
  );
});

// unique
Deno.test("unique #1", () => {
  assertEquals(unique([1, 2, 2, 3, 4, 4, 5]), [1, 2, 3, 4, 5]);
  assertEquals(
    uniqueByRight(
      [
        { id: 0, value: "a" },
        { id: 1, value: "b" },
        { id: 2, value: "c" },
        { id: 1, value: "d" },
        { id: 0, value: "e" },
      ],
      (a: any, b: any) => a.id == b.id
    ),
    [
      { id: 0, value: "e" },
      { id: 1, value: "d" },
      { id: 2, value: "c" },
    ]
  );
  assertEquals(
    uniqueBy(
      [
        { id: 0, value: "a" },
        { id: 1, value: "b" },
        { id: 2, value: "c" },
        { id: 1, value: "d" },
        { id: 0, value: "e" },
      ],
      (a: any, b: any) => a.id == b.id
    ),
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
    ]
  );
});

// unzip
Deno.test("unzip #1", () => {
  assertEquals(
    unzip([
      ["a", 1, true],
      ["b", 2, false],
    ]),
    [
      ["a", "b"],
      [1, 2],
      [true, false],
    ]
  );

  assertEquals(
    unzip([
      ["a", 1, true],
      ["b", 2],
    ]),
    [["a", "b"], [1, 2], [true]]
  );
  assertEquals(
    unzip(
      [
        ["a", 1],
        ["b", 2],
      ],
      2
    ),
    [
      ["a", "b"],
      [1, 2],
    ]
  );
});

// unzipWith
Deno.test("unzipWith #1", () => {
  assertEquals(
    unzipWith(
      [
        [1, 10, 100],
        [2, 20, 200],
      ],
      (...args: number[]) => args.reduce((acc, v) => acc + v, 0)
    ),
    [3, 30, 300]
  );
  assertEquals(
    unzipWith(
      [
        [1, 10, 100],
        [2, 20, 200],
      ],
      (...args: number[]) => args.reduce((acc, v) => acc + v, 0),
      3
    ),
    [3, 30, 300]
  );
});
// URLJoin
Deno.test("URLJoin #1", () => {
  assertEquals(
    URLJoin("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo"),
    "http://www.google.com/a/b/cd?foo=123&bar=foo"
  );
  assertEquals(
    URLJoinWithParams(URLJoin("http://www.google.com", "a", "/b/cd"), {
      foo: 123,
      bar: "foo",
    }),
    "http://www.google.com/a/b/cd?foo=123&bar=foo"
  );
});

// UUIDGeneratorBrowser
Deno.test("UUIDGeneratorBrowser #1", () => {
  assertEquals(UUIDGeneratorBrowser() !== undefined, true);
  assertEquals(UUIDGeneratorBrowser().split("-").length, 5);
});

// yesNo
Deno.test("yesNo #1", () => {
  assertEquals(yesNo("Y"), true);
  assertEquals(yesNo("yes"), true);
  assertEquals(yesNo("No"), false);
  assertEquals(yesNo("Foo", true), true);
});

// formatDate
Deno.test("formatDate #1", () => {
  const date = new Date(2020, 7, 22, 22, 22, 22, 222);
  assertEquals(
    formatDate("YYYY-DD-MM hh:mm:ss M", date),
    "2020-22-08 22:22:22 222"
  );

  const date2 = new Date(2020, 7, 9, 9, 9, 9, 99);
  assertEquals(
    formatDate("YYYY-DD-MM hh:mm:ss M", date2),
    "2020-09-08 09:09:09 099"
  );
});
