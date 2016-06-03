const beautylog = require('beautylog')
const fs = require('fs')
const async = require('async')
const getResults = require('quiniela-results')
const moment = require('moment')

function program (from, to) {
  return new Promise((resolve, reject) => {
    const dateFrom = moment(new Date(from))
    const dateTo = moment(new Date(to))
    const diff = dateTo.diff(dateFrom, 'days')

    beautylog.info(`From: ${dateFrom.format('DD/MM/YYYY')}`)
    beautylog.info(`To  : ${dateTo.format('DD/MM/YYYY')}`)
    beautylog.info(`Difference: ${diff} days`)

    let file = fs.createWriteStream('results.json')
    file.write('[\n')

    let index = 0

    async.until(
      () => index > diff,
      (callback) => {
        const currentDate = dateFrom.format('YYYY/MM/DD')

        beautylog.log(`Looking for results of ${currentDate}`)

        getResults(currentDate, (error, draw) => {
          if (error) return callback(error)

          const str = JSON.stringify({
            date: currentDate,
            results: draw
          }, null, 2)

          file.write(str)

          dateFrom.add(1, 'day')
          index++

          if (index !== diff) file.write(',\n')

          callback(null, index)
        })
      },
      (error, count) => {
        file.write('\n]')
        file.end()

        if (error) return reject(error)

        beautylog.ok(`${count} successful requests`)
        resolve()
      }
    )
  })
}

module.exports = program
