const x = undefined;
if (x >= 0) {
	console.log('Число положительное')
} else {
	console.log('Число отрицательное')
}


var res = 0;
for (i = 0; i < 51; i+=5){
	res += i
}
console.log(res)



var numbers = [ 254, 115, 78, 25, 91, 45, 37 ];
for (i = 0; i < numbers.length; i ++ ){
	if (numbers[i] >= 50) {
		console.log(numbers[i])
	}
}

