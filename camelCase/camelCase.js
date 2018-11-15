function camelcase(s) {
  let countUp = 1;

  for(let i of s) {
    if(i === i.toUpperCase()) {
      countUp += 1;
    }
  }
  return countUp;

}

camelcase('saveChangesInTheEditor');
