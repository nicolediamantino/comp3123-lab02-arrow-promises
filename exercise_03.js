const colors = ['red', 'green', 'blue'];
function capitalizeFirstLetter(string) {
    const [first, ...rest] = string;
    return [first.toUpperCase(), ...rest].join("");
}
const capitalizedColors = colors.map(color => capitalizeFirstLetter(color))
console.log(capitalizedColors);
