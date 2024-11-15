const express = require('express');
const blog = require('./routes/blog');
const shop = require('./routes/shop');
const fs = require('fs')

const app = express();
const port = 8080;
app.use(express.static("public"))

app.use((req,res,next)=>{
    console.log("hacked by middleware ");
    // console.log(req.headers);
    req.kamal = "kamal barman";
    fs.appendFileSync("log.txt",`${Date.now()} is a ${req.method}`)
    console.log(`time is ${Date.now()} method is  ${req.method}`);
    
    // console.log(req.headers);
    next()   
})

app.use(express.static('public'));
app.use("/blog", blog)
app.use("/shop",shop)

app.get("/",(req,res)=>{
    res.send("hello world")
})

// app.post('/', (req, res) => {
//   console.log('it is a post request');
//   res.send('it is a post request in document');
// }); 

app.get('/form', (req, res) => {
  console.log('its a get request');
  res.sendFile('template/form.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    console.log('its a get request');
    res.send("it is about "+ req.kamal);
  });

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});


