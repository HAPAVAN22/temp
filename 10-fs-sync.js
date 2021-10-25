// fs module - file system
// sync (non-blocking) and async (blocking)
const {readFileSync, writeFileSync, read} = require('fs');

// const fs = require('fs');
// fs.readFileSync();

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/third.txt',
    `here is the result ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task');
console.log('starting the next task');