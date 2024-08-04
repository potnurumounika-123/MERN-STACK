const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportlocalMongoose = require('passport-local-mongoose')
var groominfo = new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	dob: {
		type: String
			
	},
	email: {
		type: String
	},
	age: {
		type: Number
	}
})
groominfo.plugin(passportlocalMongoose);
module.exports=mongoose.nodejs('groomtable',groominfo) 