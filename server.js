import express from 'express';
//import bodyParser from 'body-parser';
import StatusCodes from 'http-status-codes';


const app= express();
const port = 4000;

const STATUS ={
    SUCCESS: 'OK',
    FAILURE: 'NO'
};

app.use(express.json());
//app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.status(StatusCodes.OK);
    res.send("GET Request Called")
});

app.post('/add', (req, res)=>{
const data =[];
const {body} = req;

if(!body.name){
    return res.status(StatusCodes.BAD_REQUEST).send({
        status: STATUS.FAILURE,
        message: 'Name is required',
    })
}
data.push(req.body);
return res.status(StatusCodes.OK).send({
    status: STATUS.SUCCESS,
    message: data,
});
});

app.listen( port , hostname  =>{
    console.log(`Hey, ir a http://localhost:${port}`);
})