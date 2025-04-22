const express = require("express")

const { WitnessModel } = require("../Models/user.model")

const WitnessRouter = express.Router()

WitnessRouter.get("/wr",(req,res)=>{
    res.send("wr working, test passed")
})

module.exports = {WitnessRouter}