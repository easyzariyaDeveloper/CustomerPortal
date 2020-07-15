const express = require('express');
const path = require('path');
const MobileDetect = require('mobile-detect');
const cookieParser = require("cookie-parser");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 4000;

app.use(cookieParser());
app.use("/easyzariya/health", (req, res) => {
    res.status(200).send("Launched");
})

app.use(express.static(__dirname + '/dist'));

app.use('/api', createProxyMiddleware({ 
    target: "https://easyzariyademo.azurewebsites.net/", 
    changeOrigin: true,
    pathRewrite: { "^/api": "" }
}));

app.use(function (req, res, next) {
    if (req.cookies["access_token"] && !req.cookies["access_token"].includes("bearer")) {
        req.headers["Authorization"] = "Bearer " + req.cookies["access_token"];
    }
    if((req.url.includes("profile")) && !req.cookies["access_token"]){
        return res.redirect(`/login`)
    } else {
        next();
    }
});

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