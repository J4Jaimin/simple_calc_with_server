import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    // console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("Your calculation is : " + result);
});

app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function (req, res) {
    var height = Number(req.body.height);
    var mass = Number(req.body.weight);

    var bmi = mass / (height * height);

    res.send("Your BMI is: " + bmi);
});

app.listen(port, function () {
    console.log(`The server has been started at port ${port}`);
});