const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const nodeMailer = require('nodemailer');


const path = require('path');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));


app.use(cors());




// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An api endpoint that returns a short list of items
app.get('/api', (req, res, next) => {
    res.send('API status: running');
});

app.post('/api/email', (req, res, next) => {
        console.log(process.env.EMAIL_ID);

        const transporter = nodeMailer.createTransport({
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            tls: {
                ciphers:'SSLv3'
            },
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PW
            }
        });

        // send mail with defined transport object
        transporter.sendMail({
            from: process.env.EMAIL_ID, // sender address
            to: process.env.EMAIL_ID, // list of receivers
            subject: "contact from portfolio", // Subject line
            text: req.body.informationDetails, // plain text body
            html: "<b>Welcome</b>" // html body
        }, (err, info) => {
            if (err) {
                console.log(err);
            }
            console.log('Message sent: ' + info.messageId);
            res.status(200).json({
                success: true
            });
        });

})




// Handles any requests that don't match the ones above

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname , 'build', 'index.html'));
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
