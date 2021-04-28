const Datastore = require('nedb-promise')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.SECRET)
require("dotenv").config();
const streams = new Datastore
({
	filename: './db/streams.db',
	autoload: true
});

module.exports = {
async decryptFlows(){
	const allstreams = await streams.find({})

	allstreams.forEach(stream => {
		stream.date = cryptr.decrypt(stream.date)
		stream.tags = cryptr.decrypt(stream.tags)
		stream.content = cryptr.decrypt(stream.content)
		
	})
	return allstreams
}
}