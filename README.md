# node-camera-qr-reader

Capture and read a QR code from a camera from nodejs.
 
## Usage
```
var captureQrCode = require('node-camera-qr-reader')

var content = await captureQrCode()
```

## Dependencies

### Linux
`sudo apt-get install fswebcam`

### MacOS
`brew install imagesnap`
