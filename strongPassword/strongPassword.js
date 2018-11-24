function minimumNumber(n, password) {

  let output = 0;

  let numbers = '0123456789';
  let lower_case = 'abcdefghijklmnopqrstuvwxyz';
  let upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let special_characters = '!@#$%^&*()-+';

  let num = 0;
  let lc = 0;
  let uc = 0;
  let sc = 0;

  let count = 0;

  for(let i = 0; i < password.length; i++) {
    if(numbers.includes(password[i])) {
      num++;
    }
    if(lower_case.includes(password[i])){
      lc++;
    }
    if(upper_case.includes(password[i])) {
      uc++;
    }
    if(special_characters.includes(password[i])) {
      sc++;
    }

  }

  if(num === 0) {
    count++;
  }
  if(lc === 0) {
    count++;
  }
  if(uc === 0) {
    count++;
  }
  if(sc === 0) {
    count++;
  }


  if(n < 6) {
    output = 6-n;
  }

  if(count > output) {
    return count;
  }
  else{
    return output;
  }
}

minimumNumber(4, 'A!1a');