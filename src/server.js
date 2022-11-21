import express from "express";
import { people} from './people';


let app=express();

app.get('/hello', (req,res) =>{
    res.send("Hai Eswar");
});

app.get('/people', (req,res)=>{
    res.json(people);
})



app.listen(3000, () => {
    console.log("Server started on port 3000");
});