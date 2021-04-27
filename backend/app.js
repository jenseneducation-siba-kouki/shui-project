const express = require("express");
const app = express();
const cors = require("cors");

const usersRouter = require("./routes/users");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", usersRouter);



app.listen(5000, () => console.log("Server started"))


