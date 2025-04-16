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
        title:"title",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        img:"immage",
        tags:["tag1","tag2"]
    },
    {
        title:"title",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        img:"immage",
        tags:["tag1","tag2"]
    },
]

// rotta per i post
app.get("/bacheca", (req, res)=>{
    res.send(posts)
})

//creo un asset statico
app.use(express.static("public"));