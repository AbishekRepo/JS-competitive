let theArray = [
  2,
  3,
  4,
  5,
  6,
  7,
  89,
  "data",
  "filter",
  "string",
  "mano",
  [],
  {},
  true,
  false,
];

function filterString(arr) {
  let filterData = arr.filter(
    (element) => typeof element == "string" || typeof element == "object"
  );
  return filterData;
}

const filterArray = filterString(theArray);
console.log(filterArray);
