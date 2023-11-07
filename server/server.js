
require("dotenv").config()


const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

  const product = new Map([
    [1, { priceInCents: 10000, name: "Learn React Today" }],
    [2, { priceInCents: 20000, name: "Learn CSS Today" }],
  ])

// const products=new Map([
//     {
//       id:0.0,
//       img:"./images/dress1.jpg",
//       name:"White Off Shoulder Top",
//       price:"499",
//     },
//     {
//       id:0.1,
//       img:"./images/dress2.jpg",
//       name:"Red Maxi Dress",
//       price:"899",
//     },
//     {
//       id:0.2,
//       img:"./images/dress3.jpg",
//       name:"Purple Maxi Dress",
//       price:"799",
//     },
//     {
//       id:0.3,
//       img:"./images/dress4.jpg",
//       name:"Bottle neck Gown",
//       price:"999",
//     },
  
//     {
//       id:1.0,
//       img:"./images/accessories1.jpg",
//       name:"Rose Gold Bracelet",
//       price:"299",
//     },
//     {
//       id:1.1,
//       img:"./images/accessories2.jpg",
//       name:"Star Shaped Earrings",
//       price:"99",
//     },
//     {
//       id:1.2,
//       img:"./images/accessories3.jpg",
//       name:"Pearl Necklace",
//       price:"179",
//     },
//     {
//       id:1.3,
//       img:"./images/accessories4.jpg",
//       name:"3-layers Necklace",
//       price:"399",
//     },

//     {
//       id:2.0,
//       img:"./images/makeup1.jpg",
//       name:"Red Matt Lipstick",
//       price:"599",
//     },
//     {
//       id:2.1,
//       img:"./images/makeup2.jpg",
//       name:"Makeup Brush Set",
//       price:"499",
//     },
//     {
//       id:2.2,
//       img:"./images/makeup3.jpg",
//       name:"Illuminating face cream",
//       price:"999",
//     },
//     {
//       id:2.3,
//       img:"./images/makeup4.jpg",
//       name:"Conclear",
//       price:"399",
//     },
  
//     {
//       id:3.0,
//       img:"./images/bag1.jpg",
//       name:"Baby pink Hand-held Bag",
//       price:"899",
//     },
//     {
//       id:3.1,
//       img:"./images/bag2.jpg",
//       name:"Multicolor Shoulder Bag",
//       price:"699",
//     },
//     {
//       id:3.2,
//       img:"./images/bag3.jpg",
//       name:"Red Shoulder Bag",
//       price:"799",
//     },
//     {
//       id:3.3,
//       img:"./images/bag4.jpg",
//       anme:"Sea green Hand-held Bag",
//       price:"999",
//     },
 
//     {
//       id:4.0,
//       img:"./images/footwear1.jpg",
//       name:"Casual Sneakers",
//       price:"399",
//     },
//     {
//       id:4.1,
//       img:"./images/footwear2.jpg",
//       name:"Flower Print Heels",
//       price:"699",
//     },
//     {
//       id:4.2,
//       img:"./images/footwear3.jpg",
//       name:"Boots For Women",
//       price:"899",
//     },
//     {
//       id:4.3,
//       img:"./images/footwear4.jpg",
//       name:"Baby Pink Shoes",
//       price:"499",
//     },
// ])

app.post("/create-checkout-session", async (req, res) => {
    // const {products}=req.body;
    // console.log(products)
  try {
      const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const pro = product.get(item.id)
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: pro.name,
            },
            unit_amount: pro.priceInCents,
          },
           quantity: item.quantity,
        }
      }),
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.listen(3000)