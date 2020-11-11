

const array = [0,1,2,3,4,5,6];

array.map
array.filter
array.slice

// implementation of array.map(mappingFunction). Should be called as mapArray(array, mappingFunction)

const mapArray = (array, mappingFunction) => {
  const newArray = [];
  let i;
  for (i = 0; i < array.length; i++) {
    const newValue = mappingFunction(array[i])
    newArray.push(newValue);
  }
  return newArray;
};


// implementation of array.map(filterFunction). Should be called as mapArray(array, filterFunction)
const filterArray = (array, filterFunction) => {
  const newArray = [];
  let i;
  for (i = 0; i < array.length; i++) {
    const shouldBeIn = filterFunction(array[i]);
    if (shouldBeIn) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// implementation of array.map(mappingFunction). Should be called as mapArray(array, mappingFunction)
const sliceArray = (array, start, end) => {
  const newArray = [];
  let i;
  for (i = Math.max(0, start); i < Math.min(end, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};
array.slice(page * pageSize, (page + 1) * pageSize);
2 * 10 = 20;
(2 + 1) * 10 = 30;
