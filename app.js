//importo express js
const express = require("express");
//assegno una funzione a una variabile
const app = express();
//inizializzo il numero della porta
const port = 3000;

//creo la rotta madre del blog
app.get("/", (req, res)=>{
    res.send("Server del mio blog")
})

//il server rimane in ascolto
app.listen(port, () =>{
    console.log(`Il Server è in ascolto nella porta ${port}`)
})

//creo un array di oggetti
const posts = [
    {
        title:"title1",
        content:"content",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title2",
        content:"content",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title3",
        content:"content",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title4",
        content:"content",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title5",
        content:"content",
        img:"immage",
        tags:["tag1","tag2"]
    },
]

// rotta per i post
app.get("/bacheca", (req, res)=>{
    res.send(posts)
})