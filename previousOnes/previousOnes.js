function birthdayCakeCandles(arr) {
  let count = 0;
  let highest = Math.max(...arr);

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === highest) {
      count ++;
    }
  }
  console.log(count);
}

let argg = [3,1,2,3];

birthdayCakeCandles(argg);




function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;

  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);

  if(minVal === maxVal) {
    for(let i = 1; i < arr.length; i++) {
      minSum += arr[i];
      maxSum += arr[i];
    }
  }
  else {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== maxVal) {
        minSum += arr[i];
      }
      if(arr[i] !== minVal) {
        maxSum += arr[i];
      }
    }
  }
  console.log(minSum.toString(), maxSum.toString());
}


// let arg = [1, 2, 3, 4, 5];
let arg = [5,5,5,5,5];

miniMaxSum(arg);





function staircase(n) {
  let str = '';
  for (var i = 0; i < n; i++) {

    for(let j = 0; j < n - i -1; j++) {
      str+=' ';
    }
    for (var k = 0; k < i + 1; k++) {
      str+='#';
    }
    str+='\n';
  }
  console.log(str);
}



staircase(6);





//      #
//     ##
//    ###
//   ####
//  #####
// ######





function plusMinus(arr) {
  let n = arr.length;
  let positive = 0;
  let negative = 0;
  let zer = 0;

  for(let i = 0; i < n; i++) {
    if(arr[i] > 0) {
      positive += 1;
    }
    if(arr[i] < 0) {
      negative += 1;
    }
    if(arr[i] === 0) {
      zer += 1;
    }
  }
  positive = positive/n;
  negative = negative/n;
  zer = zer/n;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zer.toFixed(6));
}



let argh = [-4, 3, -9, 0, 4, 1]; 
plusMinus(argh);









function diagonalDifference(arr) {
  let diff = 0;
  let n = arr.length;
  let sumr = 0;
  let suml = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(i === j) {
        sumr += arr[i][j];
      }
      if(i + j === n-1) {
        suml += arr[i][j];
      }
    }
  }
  diff = Math.abs(sumr - suml);
  return diff;
}

// let arg = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]
// ];

let arge = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1]
];

diagonalDifference(arge);