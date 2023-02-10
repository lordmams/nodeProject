

const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  
  let values = ["tata","toto","titi","tutu"]
    let items = values.map( (value) =>boucle(value)
       
    )
     
    
  res.send(`<ul>${items}</ul>`)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
