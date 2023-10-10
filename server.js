import express from 'express';
import StatusCodes from 'http-status-codes';


const app= express();
const port = 3000;
const code=201;
app.get('/add', (req, res) => {
    res.status(StatusCodes.CREATED);
    res.send("GET Request Called")
});

app.listen( port , hostname  =>{
    console.log(`Hey, ir a http://localhost:${port}`);
})