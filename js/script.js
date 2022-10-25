const arr = [[3,21,37], [61,79,101,120], [133,149]];

const isNumberInArrayofArrays = (number, array) => {
  let found = false;
  array.forEach(innerArray => {
    if (innerArray.indexOf(number) !== -1) {
      found = true;
      return found;
    }
  }    
  );
  return found;
};

console.log(isNumberInArrayofArrays(0, arr)); //false
console.log(isNumberInArrayofArrays(21, arr)); //true
console.log(isNumberInArrayofArrays(221, arr)); //false


let color = 'white';

const button = document.getElementById('switch');

button.addEventListener('click', () => {
  color = color === 'white' ? 'black' : 'white';
  document.body.style.background = color;
})