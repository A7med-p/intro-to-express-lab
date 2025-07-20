const express = require('express') 
const app = express() 

app.listen(3000, () => {
    console.log('Everything is gravy...')
})

app.get('/greetings/:name', (req, res) => {
    res.send(`<h1>Hello there,${req.params.name}</h1>`)
})

app.get('/roll/:number', (req, res) => {
    req.params.number = parseInt(req.params.number, 10)
    if(req.params.number === req.params.number){
        res.send(`<h1>You rolled a ${Math.floor(Math.random() * req.params.number)}</h1>`)
    } else {
        res.send('You must specify a number.')
    }
})

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    if(collectibles.length < req.params.index){
        res.send('This item is not yet in stock. Check back soon!')
    }else{
        res.send(`So, you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`)
    }
})

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

app.get('/shoes/minPrice/:price', (req, res) => {
   res.send(shoes.filter((shoes) => shoes.price <= req.params.price))
});

app.get('/shoes/maxPrice/:price', (req, res) => {
   res.send(shoes.filter((shoes) => shoes.price >= req.params.price))
});

app.get('/shoes/type/:type', (req, res) => {
   res.send(shoes.filter((shoes) => shoes.type == req.params.type))
});