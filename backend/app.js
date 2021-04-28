const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const usersRouter = require("./routes/users");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", usersRouter);

const Flow = require('./models/Flow.js');
const Tags = require('./models/Tags')
const { verify } = require('./verify')
// const streams = new Datastore ({
// 	filename: './db/streams.db',
// 	autoload: true
// })


app.get('/api/flow', verify, async (request, response) => {
	
	const flowItems = await Flow.decryptFlows();

	if (flowItems) {
		response.json(flowItems)
	} else {
		response.status(401).json({ error: 'error with flow' })
	}
})

app.post('/api/tags', verify, async (req, res) => {

	const tags = await Tags.insertTags(req.body, req.user.userID)
	if (tags) {
		res.json({ message: 'HEEJ' })
		return
	}
	res.status(401).json({ error: 'Couldnt load ' })
})

app.get('/api/tags', verify, async (req, res) => {
	const tags = await Tags.getAllTags(req.user.userID)
	if (tags) {
		res.json(tags)
		return
	}
	res.status(401).json({ error: 'Couldnt load resources' })
})

app.delete('/api/user', verify, async (req, res) => {
	
	const tags = await User.deleteUser(req.user.userID)
	if (tags) {
		res.json({ message: 'User Removed' })
		return
	}
	res.status(401).json({ error: 'Couldnt load resources' })
})



app.listen(5000, () => console.log("Server started"))


