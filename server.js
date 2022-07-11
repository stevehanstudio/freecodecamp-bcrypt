'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const fccTesting = require('./freeCodeCamp/fcctesting.js')
const app = express()
fccTesting(app)
const saltRounds = 12
const myPlaintextPassword = 'sUperpassw0rd!'
const someOtherPlaintextPassword = 'pass123'

//START_ASYNC -do not remove notes, place code between correct pair of notes.
const bcrypt = require('bcrypt')

// bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//   console.log(hash);
//   bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
//     console.log(res)
//   })
// })

bcrypt.hash('passw0rd!', 13, (err, hash) => {
	console.log(hash)
	//$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
	bcrypt.compare('passw0rd!', hash, (err, res) => {
		console.log(res) //true
	})
})

bcrypt.hash(myPlaintextPassword, 13, (err, hash) => {
	console.log(hash)
	//$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
	bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
		console.log(res) //true
	})
})

//END_ASYNC

//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)

var result = bcrypt.compareSync(myPlaintextPassword, hash)

console.log(result)

//END_SYNC

app.listen(process.env.PORT || 3000, () => {})
