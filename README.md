# quiniela-history

[![npm version](https://img.shields.io/npm/v/quiniela-history.svg)](https://www.npmjs.com/package/quiniela-history)
[![Travis branch](https://img.shields.io/travis/durancristhian/quiniela-history/master.svg?maxAge=2592000)](https://travis-ci.org/durancristhian/quiniela-history)
[![node](https://img.shields.io/node/v/quiniela-history.svg?maxAge=2592000)](https://www.npmjs.com/package/quiniela-history)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=2592000)](http://makeapullrequest.com)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?maxAge=2592000)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/durancristhian/quiniela-history/blob/master/LICENSE)

`quiniela-history` is a module to obtain the results of the argentinian lotery

## Demo

![quiniela-history](https://raw.githubusercontent.com/durancristhian/quiniela-history/master/images/quiniela-history-demo.gif)

## Instalation

```bash
npm i -g quiniela-history
```

## Use 1: as a CLI

```bash
quiniela-history --from 2016/06/01 --to 2016/06/03
```

## Use 2: as any other npm module

```javascript
const quinielaHistory = require('quiniela-history')

quinielaHistory(
  '2016/06/01', // from
  '2016/06/05' // to
)
```

## Contributing

No restriction at all. Feel free to contribute with whatever you want

## License

MIT
