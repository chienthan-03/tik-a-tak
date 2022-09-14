import express from 'express'
import configsViewEngine from './configs/viewEngine'
import initWebRouter from './route/web'
import path from 'path'
import initApiRoute from './route/api'
// import connection from './configs/mysql/connectDB'

require('dotenv').config()

const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 4000

//init HTTP request
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//code public
app.use(express.static(path.join(__dirname, 'public')))

//init web route
initWebRouter(app)
  
//init api route
initApiRoute(app)

//404 response handler
app.use((req, res) => {
  res.render('404.ejs')
})

//using morgan
app.use(morgan('combined'))
  
//setup viewEngine
configsViewEngine(app)

app.listen(port)    