function reverseStr(str) {
  return str.split(' ').reverse().join(' ')
}

let foo = 'Better Call Saul'

console.log(reverseStr(foo));