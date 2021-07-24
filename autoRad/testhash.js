let chars = "0123456789abcdef";
let hash = '0x';
const fs = require('fs')
var logger = fs.createWriteStream('testhash.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})
used = new Set()
logger.write('[')
for (var i = 0; i < 16; i++) {
    createTestHash(chars.charAt(i) + chars.charAt(i))
    createTestHash(chars.charAt(i) + 0)
    createTestHash(0 + chars.charAt(i) )
    createTestHash(chars.charAt(i) + 7)
    createTestHash(7 + chars.charAt(i) )
}
logger.write(']')

function createTestHash(pattern) {
    
    var currhash = hash;
    while (currhash.length < 64) {
        currhash = currhash + pattern
    }
    if(used.has(currhash)) return
    currhash = '"' + currhash + '",\r\n';
    logger.write(currhash)
}