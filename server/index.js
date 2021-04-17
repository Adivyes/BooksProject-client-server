const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const dbConnection = require("./DB");
const app = express();
const BookRouter = require("./routs/book-router")

const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dbConnection.on('error', (err)=>{console.log(err)})
app.get("/", (req, res) => {
  res.status(200).json({message: "Get api is working fine"});
});

app.use('/books',BookRouter)
app.listen(PORT, () => {
  console.log(`MERN app is connected to serve on server on port: ${PORT}`);
});

// const path = require('path'); 
// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     // Handle React routing, return all requests to React app
//     app.get('*', (req, res)=>{
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     });
// }
