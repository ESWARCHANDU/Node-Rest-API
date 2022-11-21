import express from "express";


let app=express();

app.get('/hello', (req,res) =>{
    res.send("Hai Eswar");
});



app.listen(3000, () => {
    console.log("Server started on 3000");
});