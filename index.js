const express      = require('express');
const bodyParser   = require('body-parser');
const fs           = require('fs');
const path		   = require('path')
const session      = require('express-session');
const isUp         = require('is-up');
const validator    = require('validator');
const sanitizer    = require('express-sanitizer');
const helmet       = require('helmet');
const dotenv       = require('dotenv')
const app          = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname));
app.use(express.static("public"));

app.disable('x-powered-by')
app.use(sanitizer())
app.use(helmet());
dotenv.config()
app.use(session({
    secret: process.env.SECRET,
    cookie: {
        maxAge: 60000,
        httpOnly: true,
        secure: true
    },
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/check', function(req, res, next) {
    let site = validator.escape(req.sanitize(req.body.url).replace('https://', '').replace('http://', ''));

    if (!validator.isURL(site)) {
        const status = 'doesn\'t seem to be a valid url.'

        fs.readFile(__dirname + '/public/status.html', function(err, data) {
            if (err) {
                throw err;
            }

            let html = data.toString();
            html = html.replace(/{{SITE_LINK}}/g, site);
			html = html.replace(/{{SITE}}/g, site);
            html = html.replace(/{{STATUS}}/g, status);

            return res.send(html);
        });
    } else {
		site = 'https://' + site;
		
        isUp(site).then(up => {
            let status
			
			if (up) {
                status = 'is up!';
            } else {
                status = 'seems to be down!';
            }
    
            fs.readFile(__dirname + '/public/status.html', function(err, data) {
                if (err) {
                    throw err;
                }
    
                let html = data.toString();
                html = html.replace(/{{SITE_LINK}}/g, site);
				html = html.replace(/{{SITE}}/g, site);
                html = html.replace(/{{STATUS}}/g, status);
    
                res.send(html);
            });
        }).catch(next);
    }
});

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send('Something broke!')
});

console.log("-> Running node server @: http://localhost:3000/");
const port = process.env.PORT || 3000;
app.listen(port);
