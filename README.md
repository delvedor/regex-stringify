# regex-stringify
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://travis-ci.org/delvedor/regex-stringify.svg?branch=master)](https://travis-ci.org/delvedor/regex-stringify)

Stringify a Regex object or string into a JSON compatible string.

**Needs Node.js ≥ 4.0.0**

## Install
```
npm install regex-stringify --save
```

## Usage
```javascript
const rs = require('regex-stringify')

const reg = /"([^"]|\\")*"/
const regStr = '"([^"]|\\\\")*"'

console.log(rs(reg)) // '"\\"([^\\"]|\\\\\\\\\\")*\\""'
console.log(rs(regStr)) // '"\\"([^\\"]|\\\\\\\\\\")*\\""'

const regStringify = rs(reg)
console.log(reg.source === new RegExp(JSON.parse(regStringify)).source) // true
```
## Contributing
If you feel you can help in any way, be it with examples, extra testing, or new features please open a pull request or open an issue.

The code follows the Standard code style.  
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License
**[MIT](https://github.com/delvedor/regex-stringify/blob/master/LICENSE)**

*The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.*

Copyright © 2016 Tomas Della Vedova
