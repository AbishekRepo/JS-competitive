const data = {
  randy: 10,
  rollins: 5,
  david: 3,
};

const fine = { randy: data.randy, rollins: data.rollins, david: data.david };
console.log(fine);

// const spread = { ...data };
// console.log(spread);

function spread(...reduce) {
  let data = reduce.reduce((cur, acc) => {
    return cur + acc;
  }, 0);
  return data;
}

let spreadData = spread(1, 2, 3, 4, 5, 6, 78);
console.log(spreadData);
