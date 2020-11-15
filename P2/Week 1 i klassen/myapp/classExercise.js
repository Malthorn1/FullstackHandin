const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT || 3333
 
app.get('/', (req, res) => {
    res.send('Hello Class!')
})
 
app.get("/required/:year/:month",(req,res)=>{
   const {year,month} = req.params;
   //const month = req.params.month;
   res.send({year,month});
})
//  /query?year=2000&month=11
app.get("/query",(req,res)=>{
   const {year,month} = req.query
   res.send({year,month});
})
 
app.post("/postdata",(req,res)=>{
  console.log(req.body)
  const {fName,lName} = req.body;
  res.send({fName,lName});
})
 
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

