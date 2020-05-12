const app = express();
const PORT = 4000;

app.use("/easyzariya/health", (req, res) => {
    res.status(200).send("Launched");
})

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('server started and listening on port : ' + PORT);
});