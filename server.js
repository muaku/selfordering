'use strict'

const ENV = process.env.NODE_ENV || "development"
const DEFAULT_PORT = 8000
const DEFAULT_HOSTNAME = '127.0.0.1'

const http = require("http")
const express = require("express")
const app = express()
const config = require("./config/index")
const router = require("./app/routers/router")
const firebase = require("./firebase")

/** 
	SET express variable
**/
app.set("env", ENV)

app.use(express.static('public/firetest'))

require("./mongoose").init(app)
require("./express").init(app)


// CHECK for valid token
app.use(firebase.checkToken)
// TEST ROUTER
app.use("/", router)



/**
	START server
**/
let server = http.createServer(app)
server.listen(
	config.port || DEFAULT_PORT, 
	config.hostname || DEFAULT_HOSTNAME,
	() => {
		console.log(`SERVER is listening on port: ${config.port}`);
		console.log(`With environment: ${ENV.toLowerCase()}`);
	}
)


module.exports = server