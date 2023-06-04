function reverseWords(str) {
	return str.split(' ').map((item) => {
		return item.split('').reverse().join('')
	}).join(' ')
}

let foo = "Better Call Soul";

console.log(reverseWords(foo));