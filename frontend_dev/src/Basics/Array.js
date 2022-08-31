/****************WORRY ABOUT THIS LATER**********************************/


// import React from "react";
// function Array() {
//   const sum = (x, y) => x + y;
//   const suqare = (x) => x * x;
//   const map = (a, ...args) => a.map(...args);
//   const reduce = (a, ...args) => a.reduce(...args);
//   const arr = [1, 2, 3, 4, 5];
//   let mean = reduce(arr, sum) / arr.length;
//   let deviation = map(arr, (x) => x - mean);
//   let stdev = Math.sqrt(reduce(map(deviation, suqare), sum) / (arr.length - 1));
//   return <div className="Array">{stdev}</div>;
// }

// export default Array;

//NOTE: CALL STCAK SIZE EXCEEDDED ERROR
//A FUNCTION IS BIGGER THAN ITS CALL STACK SIZE.
//HOW TO DEBUG OUR CODE ? AND HOW TO TRACK THE CALL STACK ?
//WHERE TO PLACE DEBGGER ?
//WHERE TO PLACE LOGGER ?

function Array() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 4, 5];
  function isEqual() {
    return JSON.stringify(arr1) === JSON.stringify(arr2)? "given arrays are matched" : "given arrays are not matched." ;
  }

  return (
    <div className="Array">
      <p>
        Comparing two arrays {arr1} and {arr2}
      </p>
      <p>{(isEqual())}</p>
    </div>
  );
}
export default Array;
