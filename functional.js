let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// map: Imperative version
function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push(urlify(state));
  });
  return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
  return states.map(state => urlify(state));
}
console.log(functionalMap(states));

function stateUrls(states) {
  return states.map(state => "https://example.com/" + urlify(state));
}
// console.log(stateUrls(states));

// filter: Imperative version
function imperativeFilter(states) {
  let singleWordStates = [];
  states.forEach(function(state) {
    if (state.split(/\s+/).length === 1) {
      singleWordStates.push(state);
    }
  });
  return singleWordStates;
}
console.log(imperativeFilter(states));

// filter: Functional version
function functionalFilter(states) {
  return states.filter(state => state.split(/\s+/).length === 1);
}
console.log(functionalFilter(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce: Iterative solution
function iterativeSum(array) {
  let total = 0;
  array.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(iterativeSum(numbers));

// reduce: Functional solution
function functionalSum(array) {
  return array.reduce((total, n) => { return total += n });
}
console.log(functionalSum(numbers));

// reduce object: Imperative solution
function imperativeLengths(states) {
  let lengths = {};
  states.forEach(function(state) {
    lengths[state] = state.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// reduce object: Functional solution
function functionalLengths(states) {
  return states.reduce((lengths, state) => {
                          lengths[state] = state.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// reduce object: Functional solution
function functionalLengths1Line(states) {
  return states.reduce((lengths, state) => { lengths[state] = state.length; return lengths; }, {});
}
console.log(functionalLengths(states));

let moreNums = [3, 7, 4];

// Functional (reduce) product of elements
function functionalProduct(array) {
  return array.reduce((product, n) => { return product *= n });
}

console.log(functionalProduct(moreNums));

