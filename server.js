const express = require('express');
const path = require('path');
const MobileDetect = require('mobile-detect');
const cookieParser = require("cookie-parser");
const { createProxyMiddleware } = require('http-proxy-middleware');

// const fs = require('fs')
// const https = require('https')

const app = express();
const PORT = 4000;

app.use(cookieParser());
app.use("/easyzariya/health", (req, res) => {
    res.status(200).send("Launched");
})

app.use(express.static(__dirname + '/dist'));

app.use('/api', (req, res, next) => {
    if (req.cookies["access_token"] && !req.cookies["access_token"].includes("bearer")) {
        req.headers["Authorization"] = "bearer " + req.cookies["access_token"];
    }
    next();
}, createProxyMiddleware({ 
    target: "http://api.ezautocare.in/", 
    changeOrigin: true,
    pathRewrite: { "^/api": "" }
}));

app.use(function (req, res, next) {
    if (req.cookies["access_token"] && !req.cookies["access_token"].includes("bearer")) {
        req.headers["Authorization"] = "bearer " + req.cookies["access_token"];
    }
    if((req.url.includes("profile")) && !req.cookies["access_token"]){
        return res.redirect(`/login`)
    } else {
        next();
    }
});


////////////////// https code

// set up a route to redirect http to https
// app.get('*', function(req, res) {  
//     res.redirect('https://' + req.headers.host + req.url);

//     // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
//     // res.redirect('https://example.com' + req.url);
// })


app.use (function (req, res, next) {
    if (req.secure) {
            // request was via https, so do no special handling
            next();
    } else {
            // request was via http, so redirect to https
            res.redirect('https://' + req.headers.host + req.url);
    }
});

////////////////////////////////////

app.get('*', (req, res) => {
    const md = new MobileDetect(req.headers['user-agent']);
    if(md.mobile()){
        //console.log("Mobile Device", path.join(__dirname, 'dist/mobile', 'index.html'));
        res.sendFile(path.join(__dirname, 'dist/mobile', 'index.html'));
    } else {
        //console.log("Desktop Device", path.join(__dirname, 'dist', 'index.html'));
        res.sendFile(path.join(__dirname, 'dist/desktop', 'index.html')); 
    }
});




app.listen(PORT, () => {
    console.log('server started and listening on port : ' + PORT);
});


/** uncomment it if https.createServer() doesn't work **/
// https.createServer({
//     key: fs.readFileSync('./Certificate/ezautocare-private.key'),
//     cert: fs.readFileSync('./Certificate/da20e24c4e4fb3e.crt'),
//     ca: [fs.readFileSync('./Certificate/gd_bundle-g2-g1.crt')]
// }, app).listen(PORT, ()=> {
//    console.log("server started and listening on port : " + PORT);
// });
