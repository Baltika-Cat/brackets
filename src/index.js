module.exports = function check(str, bracketsConfig) {
  const open = [];
  const close = [];
  const same = [];
  const array = [];
  let bool = false;

  bracketsConfig.forEach ((arr) => {
    if (arr[0] !== arr[1]) {
      open.push(arr[0]);
      close.push(arr[1]);
    } else {
      same.push(arr[0]);
    }    
  })

  if (str.length % 2 !== 0) {
    return false;
  } else if (open.includes(str[str.length - 1])) {
    return false;
  } else if (close.includes(str[0])) {
    return false;
  } else {
    for (let i = 0; i < str.length; i += 1) {
      if (open.includes(str[i]))  {
        array.push(str[i]);
      } else if (same.includes(str[i])) {
        if (array[array.length - 1] === same[same.indexOf(str[i])]) {
          array.pop();
        } else {
          array.push(str[i]);
        }
      } else {
        if (array.length === 0) {
          return false;
        }
        if (array[array.length - 1] === open[close.indexOf(str[i])]) {
          array.pop();
        } else {
          array.push(str[i]);
        }
      }
    }
  }
  if (array.length === 0) {
    bool = true;
  }
  return bool;
} 