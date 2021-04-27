const router = require("express").Router();
const {auth,register} = require("../models/User");

router.post('/api/register', async (request, response) => {
	const user = await register(request.body);

	if (user) {
		response.status(201).json(user);
	} else {
		response.status(500).json({ error: "Something wrong  " })
	}
})

router.post('/api/login', async (request, response) => {
	const user = await auth(request.body);

	if (user) {
		response.json(user);
	} else {
		response.send("Login failed")
	}

})


module.exports = router;
