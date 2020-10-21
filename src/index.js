module.exports = function check(str, bracketsConfig) {
  bracketsArr = bracketsConfig.map(elem => elem.join(''));

  for(let i = 0; i < bracketsArr.length; i++) {
    if(str.includes(bracketsArr[i])) {
      str = str.replace(conf[i], "");
      i = -1;
    }
  }
  return (str === '') ? true : false;
}
