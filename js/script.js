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
  document.body.classList.toggle('color');
})

// what will we see in the console?

console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 0);
console.log(4);

// 1, 4, 3, 2,