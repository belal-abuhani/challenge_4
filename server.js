const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false })) // parse the buffered data
app.use(express.json()) // application/json
app.use(express.static(__dirname + "./public"))
const port = process.env.PORT || 3000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
 

app.post('/user' , (req,res) => {
  console.log(req.body)
  let user = new User(req.body)
  user.save()
  res.json(req.body)
})