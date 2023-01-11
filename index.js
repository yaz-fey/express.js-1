const express = require('express');


const server=express();


server.get('/', (req,res) => {
    res.send("Express Geldi...");
});


server.listen(5000, () => {
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor");
})
