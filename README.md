# quiniela-history

[![Greenkeeper badge](https://badges.greenkeeper.io/durancristhian/quiniela-history.svg)](https://greenkeeper.io/)

[![npm version](https://img.shields.io/npm/v/quiniela-history.svg)](https://www.npmjs.com/package/quiniela-history)
[![Travis branch](https://img.shields.io/travis/durancristhian/quiniela-history/master.svg?maxAge=2592000)](https://travis-ci.org/durancristhian/quiniela-history)
[![Dependency Status](https://dependencyci.com/github/durancristhian/quiniela-history/badge)](https://dependencyci.com/github/durancristhian/quiniela-history)
[![node](https://img.shields.io/node/v/quiniela-history.svg?maxAge=2592000)](https://www.npmjs.com/package/quiniela-history)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?maxAge=2592000)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=2592000)](http://makeapullrequest.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/durancristhian/quiniela-history/blob/master/LICENSE)

:books: Module to obtain the results of the argentinian lotery.

## Demo

![quiniela-history](https://raw.githubusercontent.com/durancristhian/quiniela-history/master/images/quiniela-history-demo-3.gif)

## Instalation

```bash
# Use -g, --save or --save-dev. Whatever you need.
npm i quiniela-history
```

## Use

* As a CLI:

```bash
quiniela-history --from '2016-07-05' --to '2016-07-07'
```

* As any other npm module:

```javascript
const quinielaHistory = require('quiniela-history')
let opts = {
  emitLogs: true
}

quinielaHistory('2016-07-05', '2016-07-07', opts)
  .catch(error => console.error(error))
```

## Options

```javascript
{
  // false by default
  // always true if you're executing the CLI
  emitLogs: true
}
```

## How it works

1. It uses [quiniela-results](https://github.com/durancristhian/quiniela-results) to get the results of each day between `from` and `to` (including them).
2. It writes an array with all the results in `results.json`, located at the execution's directory.

## Contributing

No restriction at all. Feel free to contribute with whatever you want

## License

MIT
