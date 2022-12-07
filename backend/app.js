const express = require('express')
const app = express();
const port = 9000;
var request = require("request");

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products', (req, res) => {
    request('https://dummyjson.com/products?limit=100', function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedBody = JSON.parse(body);
            res.send(parsedBody.products)
        }
    }
    );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})