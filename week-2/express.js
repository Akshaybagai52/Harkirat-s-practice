const express = require('express');
const app = express()
const port = 3000

function calculateSum(counter) {
    var sum = 0;
    for(let i =0; i < counter; i++) {
        sum = sum + i;
    }
    return sum;
}
function createUser(req, res) {
    res.send("heeloos");
}

function handleFirstRequest(req, res) {
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);
    var answer = "The sum is " + calculatedSum;
    res.send(answer);
}

app.get('/handleSum', handleFirstRequest);
app.post('/createUser', createUser)
function started() {
    console.log(`app listening on port ${port}`)
}
app.listen(port, started)