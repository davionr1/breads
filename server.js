// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})



// // DEPENDENCIES
// const express = require('express')
// const mongoose = require('mongoose')

// // CONFIGURATION
// require('dotenv').config()
// const PORT = process.env.PORT
// const app = express()
// // Breads
//   const breadsController = require('./controllers/breads_controller.js')
//   app.use('/breads', breadsController)
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
//   () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
// )

// // MIDDLEWARE
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())


// // ROUTES
// app.get('/', (req, res) => {
//     res.send('Welcome to an Awesome App about Breads')
//   })
  
  
  
// // app.get('*', (req,res)=>{
// //   res.send('error404')
// // })

// // LISTEN
// app.listen(PORT, () => {
//   console.log('listening on port', PORT);
// })