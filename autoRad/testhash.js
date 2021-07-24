let chars = "0123456789abcdef";
let hash = '"0x';
const fs = require('fs')
var logger = fs.createWriteStream('testhash.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})
logger.write('[')
for (var i = 0; i < 16; i++) {
    var currhash = hash;
    charPattern = chars.charAt(i) + chars.charAt(i)
    while (currhash.length < 64) {
        currhash = currhash + charPattern
    }
    currhash = currhash + '",\r\n';
    logger.write(currhash)
    console.log(currhash)

    currhash = hash;
    charPattern = chars.charAt(i) + "0"
    while (currhash.length < 64) {
        currhash = currhash + charPattern
    }
    currhash = currhash + '",\r\n';
    logger.write(currhash)
    console.log(currhash)

    currhash = hash;
    charPattern = chars.charAt(i) + "7"
    while (currhash.length < 64) {
        currhash = currhash + charPattern
    }
    currhash = currhash + '",\r\n';
    console.log(currhash)
    logger.write(currhash)
}
logger.write(']')

