// Path module
// interact with file path
const path = require('path');

// separator property - platform separator
console.log(path.sep);

// join method - join a sequence of path segments
// returns a normalized resulting path
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

// base name
const base = path.basename(filePath);
console.log(base);

// resolve - absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);