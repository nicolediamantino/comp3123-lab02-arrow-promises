function capitalizeFirstLetter(string) {
    const [first, ...rest] = string;
    return [first.toUpperCase(), ...rest].join("");
}
console.log(capitalizeFirstLetter("fooBar"));
console.log(capitalizeFirstLetter("nodeJs"));

