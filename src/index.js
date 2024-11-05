
const {app} = require("./server.js");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("server is running on port http://localhost:" + PORT);
});