import express, { response } from "express";

const app = express();




app.get("/greeting/:username", (req, res)=>{
    const { username } = req.params
    res.send(`<h1>What a delight it is to see you once more ${username}!!!!</h1>`);
})

app.get("/roll/:numberParameter", (req, res)=>{
    const { numberParameter } = req.params;
    const numIt = Number(numberParameter)
    if (numIt) {
      res.send(`${Math.floor(Math.random() * numIt)}`);
    } else {
      res.send("You must specify a number");
    }
})

app.get("/collectibles/:indexParameter", (req, res) => {
    const collectibles = [
      { name: "shiny ball", price: 5.95 },
      { name: "autographed picture of a dog", price: 10 },
      { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
    ];
  const { indexParameter }  = req.params;
    let index = Number(indexParameter)

    if (index >= 0 && index < collectibles.length) {
      const item = collectibles[index]
      res.send(
        `So, you want the ${item.name}? For ${item.price}`
      );
    } else {
      res.send("This item is not yet in stock. Check back soon!");
    }
  
})

app.get("/shoes", (req, res)=>{
    const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  const { minPrice, maxPrice, type} = req.query
  const minPriceNum = parseFloat(minPrice)
  const maxPriceNum = parseFloat(maxPrice)
  let filteredShoes = shoes;
  if(!isNaN(minPrice)){
    filteredShoes = filteredShoes.filter((shoe)=>{
      return shoe.price >= minPriceNum
    });
  }if(!isNaN(maxPrice)){
    filteredShoes = filteredShoes.filter((shoe)=>{
      return shoe.price > maxPriceNum
    });
  }if(type){
    filteredShoes = filteredShoes.filter((shoe)=>{
      return shoe.type === type
    });
  
    if(filteredShoes.length > 0){
      res.send(filteredShoes);
    }else{
      res.send(shoes)
    }
  }
  
})











app.listen(3000, ()=> {
    console.log("Server running at port 3000")
})