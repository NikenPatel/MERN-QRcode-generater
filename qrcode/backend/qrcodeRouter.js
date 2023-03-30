const express = require('express')
const { scanQRcode } = require('./qrcodeController')
const qrRouter = express.Router()

qrRouter.post("/scanQRcode", scanQRcode)

module.exports = qrRouter

