const express = require("express")
const app = express()

app.get("/firebase", (req, res) => {
	console.log("GET firebase")
	res.sendFile("index.html", { root: __dirname + "/../../public/firetest", function(err){
		if (err) { console.log(err)}
		else { console.log("Sent file")}
	}})
})


module.exports = app