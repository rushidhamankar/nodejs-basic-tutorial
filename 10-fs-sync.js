const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);
writeFileSync('./content/third.txt',`HERE IS THE RESULT : ${first},${second}`,{flag:'a'})
console.log('done with the task');