import express from 'express';

const app= express();
const port = 3000;
const code=201;
app.get('/add', (req, res) => {
    res.status(code);
    res.send("GET Request Called")
});

app.listen( port , hostname  =>{
    console.log(`Hey, ir a http://localhost:${port}`);
})