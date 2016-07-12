#! /usr/bin/env node

'use strict'

const commander = require('commander')
const program = require('../lib/program')
const pkg = require('../package.json')

commander
  .version(pkg.version)
  .usage('--from [YYYY/MM/DD] --to [YYYY/MM/DD]')
  .option('--from [YYYY/MM/DD]', `'YYYY-MM-DD' format required`) // eslint-disable-line quotes
  .option('--to [YYYY/MM/DD]', `'YYYY-MM-DD' format required`) // eslint-disable-line quotes
  .parse(process.argv)

if (!commander.from || !commander.to) {
  commander.help()
}

program(commander.from, commander.to, { emitLogs: true })
  .then(() => process.exit(0))
  .catch(error => console.error(error))
