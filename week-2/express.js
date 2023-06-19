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

function handleFirstRequest(req, res) {
    var calculatedSum = calculateSum(100);
    console.log(calculatedSum);
    var answer = "The sum is " + calculatedSum;
    res.send(answer);
}

app.get('/handleSum', handleFirstRequest);
function started() {
    console.log(`app listening on port ${port}`)
}
app.listen(port, started)