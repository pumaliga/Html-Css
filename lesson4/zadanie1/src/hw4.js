function proverka(argument) {
	if (typeof argument === "number") {
		console.log(new Date().toLocaleString())
	} else {
		console.log('Неверный тип данных')
	}
}

proverka(17);


const myString = "Backend As A Service";
const newString = myString.split(' ')
let letters = [];
for (let item of newString) {
	letters.push(item[0])
}
console.log(letters)
console.log(letters.join(''))

