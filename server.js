const express = require("express");
const path = require('path')
const { rootRouter } = require("./routers/rootRouter");
const cors = require("cors")
const app = express()
const port = 7000;

app.use(express.json())
app.use(cors())

// setup static file
const publicPathDirectory = path.join(__dirname, "../public")
app.use("/public", express.static(publicPathDirectory))

app.get("/", (req, res) => {
    res.send("Wellcome AIDEAVN")
})

app.use("/api/v1", rootRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

