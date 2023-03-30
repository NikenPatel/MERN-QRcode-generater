import React, { useState } from 'react'
import { Container, Card, Grid, CardContent, TextField, makeStyles, Button } from '@material-ui/core'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10,
    },
    title: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        background: '#87CEEB',
        color: '#fff'
    },
    btn: {
        marginTop: 10,
        marginBottom: 20
    },
    cardContent: {
        justifyContent: "center",
        display: 'flex',
        alignItems: 'center'
    }
}))



const Qrcode = () => {
    const classes = useStyles()
    const [url, setUrl] = useState('')
    const [qrimage, setQRimage] = useState()

    const handleGetQrcode = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/scanQRcode", { url: url })
            .then(response => {
                setQRimage(response.data)
            })
    }
    return (
        <div>
            <Container className={classes.container}>
                <Card>
                    <h2 className={classes.title}>Generate and Downlode QR Code</h2>
                    <CardContent className={classes.cardContent}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <TextField label="Enter Text Here" onChange={(e) => setUrl(e.target.value)} value={url} />
                            <Button variant="contained" onClick={handleGetQrcode} className={classes.btn}>Generate QRcode</Button>
                        </Grid>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            {
                                url.length > 0 && qrimage ?
                                    <>
                                        <a href={qrimage} download><img src={qrimage} alt="qrImage" /></a>
                                        <p>Click on QRcode to Downlode the Image</p>
                                    </>
                                    : null
                            }
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Qrcode
