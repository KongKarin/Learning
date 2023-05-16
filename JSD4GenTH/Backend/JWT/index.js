const express = require("express");
const auth = require("./routes/auth");
const post = require("./routes/posts");

const app = express();

app.use(express.json());

app.use('/auth', require("./routes/auth"));
app.use('/posts', require("./routes/posts"));

app.listen (5000, () => {
    console.log ("Listening on port 5000!");
});