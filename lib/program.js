const fs = require('fs')
const async = require('async')
const getResults = require('quiniela-results')
const moment = require('moment')

function program (from, to) {
  return new Promise((resolve, reject) => {
    let dateFrom = moment(new Date(from))
    let dateTo = moment(new Date(to))
    let diff = dateTo.diff(dateFrom, 'days')

    console.log(`From: ${dateFrom.format('YYYY-MM-DD')}`)
    console.log(`To  : ${dateTo.format('YYYY-MM-DD')}`)
    console.log(`Requests to be made: ${diff + 1}`)

    let file = fs.createWriteStream('results.json')
    file.write('[')

    let index = 0

    async.whilst(
      () => index <= diff,
      (callback) => {
        let currentDate = dateFrom.format('YYYY-MM-DD')

        console.log(`Looking for results of ${currentDate}`)

        getResults(currentDate)
          .then(results => {
            let draw = JSON.stringify({
              date: currentDate,
              results
            }, null, 2)
            let str = draw + (index === diff ? ']' : ',')

            file.write(str)

            dateFrom.add(1, 'day')
            index++

            callback(null, index)
          })
          .catch(error => callback(error))
      },
      (error, count) => {
        if (error) return reject(error)

        console.log(`${count} successful requests`)
        resolve()
      }
    )
  })
}

module.exports = program
