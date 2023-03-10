const stripe =require("stripe")("sk_test_51Mk1bnFSAsStW2oBu2odGHeGTKKZyRHBwqj8nKgSjIexhdcRjyrKqvs2Pxp4Vz2qNbdgMzglenp6BRigk0gssijb00BdjdLS8A")
module.exports ={
    paymentt:async(req,res)=>{
        const { product } = req.body; 
  const session = await stripe.checkout.sessions.create({ 
    payment_method_types: ["card"], 
    line_items: [ 
      { 
        price_data: { 
          currency: "USD", 
          product_data: { 
            name: product.name, 
          }, 
          unit_amount: product.price, 
        }, 
        quantity: product.quantity, 
      }, 
    ], 
    mode: "payment", 
    success_url: "http://localhost:3000/success", 
    cancel_url: "http://localhost:3000/cancel",
        })
        res.status(200).send (session)
    }
}