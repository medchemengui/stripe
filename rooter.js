const router=require("express").Router()
const session =require("./cotroller")
router.post("/api/checkstripe",session.paymentt)
module.exports={
    checkoutrouter:router
}

