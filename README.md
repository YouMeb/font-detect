font-detect
===========

偵測字體，字體存在時回傳 `true`，其他情況回傳 `false`

```javascript
var detect = require('font-detect');
console.log(detect('serif'));
console.log(detect('monospace'));
console.log(detect('sans-serif'));
console.log(detect('wtasdasdf'));
```

## 安裝

### Duo

不需特別設定，直接在程式中 require：

```javascript
var fontDetect = require('YouMeb/font-detect');
```

### Browserify

```bash
$ npm i --save git+https://git@github.com/YouMeb/font-detect.git
```

## 開發

```bash
$ git clone git@github.com:YouMeb/font-detect.git
```

產生 standalone 檔案

```bash
$ make build
```
