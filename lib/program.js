const beautilog = require('beautylog')
const fs = require('fs')
const async = require('async')
const getResults = require('quiniela-results')
const moment = require('moment')

const dateFrom = moment(new Date('2006/01/01'))
const dateTo = moment(new Date())
const diff = dateTo.diff(dateFrom, 'days')

beautilog.info(`From: ${dateFrom.format('DD/MM/YYYY')}`)
beautilog.info(`To  : ${dateTo.format('DD/MM/YYYY')}`)
beautilog.info(`Difference: ${diff} days`)

var unminified = fs.createWriteStream('results.json')
unminified.write('[\n')

let index = 0

async.until(
  () => index > diff,
  (callback) => {
    const currentDate = dateFrom.format('YYYY/MM/DD')

    beautilog.log(`Looking for results of ${currentDate}`)

    getResults(currentDate, (error, draw) => {
      if (error) return callback(error)

      const str = JSON.stringify({
        date: currentDate,
        results: draw
      }, null, 2)

      unminified.write(str)

      dateFrom.add(1, 'day')
      index++

      if (index !== diff) unminified.write(',\n')

      callback(null, index)
    })
  },
  (error, count) => {
    unminified.write('\n]')
    unminified.end()

    if (error) {
      console.error(error)
      process.exit(1)
    }

    beautilog.ok(`${count} successful requests`)
  }
)
