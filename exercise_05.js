var array = [1, 2, 3, 4];
const calculateSum = array.reduce((acc, value) => acc + value);
console.log(calculateSum);
const calculateProduct = array.reduce((acc, value) => acc * value);
console.log(calculateProduct);