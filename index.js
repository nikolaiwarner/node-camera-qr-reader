const fs = require('fs')
const jpeg = require('jpeg-js')
const jsQR = require('jsqr')
const nodeWebcam = require('node-webcam')

function capture () {
  var captureOpts = {
    output: 'jpeg',
    callbackReturn: 'buffer'
  }
  return new Promise((resolve, reject) => {
    nodeWebcam.capture('webcam', captureOpts, ( err, buffer ) => {
      if (err) {
        reject(err)
      } else {
        const rawImage = jpeg.decode(buffer)
        const qrCode = jsQR(rawImage.data, rawImage.width, rawImage.height)
        if (qrCode) {
          // console.log('Found QR code: ', qrCode.data)
          resolve(qrCode.data)
        } else {
          // console.log('No QR code found')
          resolve()
        }
      }
    })
  })
}

module.exports = capture