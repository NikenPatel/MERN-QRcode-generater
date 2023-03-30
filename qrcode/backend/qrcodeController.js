const QRcode = require('qrcode')


exports.scanQRcode = (req, resp) => {

    const url = req.body.url;
    if(url.length === 0 ){
        resp.send('Enpty Data')
    }

    QRcode.toDataURL(url,function(err,url){
        resp.send(url);
    })

}