const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportlocalMongoose = require('passport-local-mongoose')
var Country = new Schema({
	cid: {
		type: Number
	},
	cname: {
		type: String
	},
	caddress: {
		type: String
	},
	cdob: {
		type: String
	},
	password: {
		type: String
	}
})
Country.plugin(passportlocalMongoose);
module.exports=mongoose.nodejs('politics',Country) 