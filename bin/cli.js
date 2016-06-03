#! /usr/bin/env node

'use strict'

const commander = require('commander')
const program = require('../lib/program')
const pkg = require('../package.json')

commander
  .version(pkg.version)
  .usage('--from [YYYY/MM/DD] --to [YYYY/MM/DD]')
  .option('--from <YYYY/MM/DD>', 'start day. For example: 2016/01/01')
  .option('--to <YYYY/MM/DD>', 'end day. For example: 2016/01/07')
  .parse(process.argv)

if (!commander.from || !commander.to) commander.help()

program(commander.from, commander.to)
  .then(() => {
    process.exit(0)
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
