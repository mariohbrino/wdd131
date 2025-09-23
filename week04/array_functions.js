let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter((name) => name.charAt(0).toLowerCase() == "b");
const namesLength = names.map((name) => name.length);
const averageStringLenght = names.reduce((accumulator, currentName) => accumulator + currentName.length, 0) / names.length;

console.log(namesB);
console.log(namesLength);
console.log(averageStringLenght);
