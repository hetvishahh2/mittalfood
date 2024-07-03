require("dotenv").config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path')

app.use(
  cors({
    origin: ["http://localhost:3000", "https://mittalfood.com" ,"http://mittalfood.com" ],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const buildPath = path.join(__dirname  , "../client1/build");

app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../client1/src/components/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'infousermittalfood@gmail.com', 
    pass: 'imlfxgtjjhvqevhj', 
  },
});

// infousermittalfood@gmail.com
// imlf xgtj jhvq evhj

app.get('/', (req, res) => {
    res.send('Hello, this is the home page!');
  });



app.post('/send-email', (req, res) => {
    try{
        const { name, bname, email, phone, organizationType, subject, message } = req.body;

        const mailOptions = {
            from: 'infousermittalfood@gmail.com', 
            to:  'mittalfoodmessenger@gmail.com',
            subject: `Subject: ${subject}`,
            text: `Name: ${name}\nBusiness Name: ${bname} \nEmail: ${email}\nOrganisation Type: ${organizationType}\nPhone: ${phone}\nMessage: ${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
            } else {
            console.log('Email sent: ' + info.response);
            // console.log(mailOptions);
            res.status(200).send('Email sent successfully');
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
