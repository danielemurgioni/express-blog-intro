//importo express js
const express = require("express");
//assegno una funzione a una variabile
const app = express();
//inizializzo il numero della porta
const port = 3000;

//creo la rotta madre del blog
app.get("/", (req,res) =>{
    res.send("Server del mio blog")
})

//il server rimane in ascolto
app.listen(port, () =>{
    console.log(`Il Server è in ascolto nella porta ${port}`)
})