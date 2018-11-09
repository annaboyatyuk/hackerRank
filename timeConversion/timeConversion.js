function timeConversion(time) {
  let PM = time.match('PM');

  time = time.split(':');
  let min = time[1];

  let hour = '';
  let sec = time[2].replace('AM', '').replace('PM', '');

  if (PM) {
    if(time[0] === '12') {
      hour = time[0];
    }
    else {
      hour = 12 + parseInt(time[0]);
    }
  } 
  else if(time[0] === '12') {
    time[0] = '00';
    hour = time[0];
  }
  else {
    hour = time[0];   
  }
  return hour + ':' + min + ':' + sec;
}
timeConversion('12:03:15PM');
// timeConversion('12:03:15AM');

// timeConversion('07:03:15PM'); // "19:03:15"

// timeConversion('1:53:55AM'); // "1:53:55"
