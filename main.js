//console.log('ciao');

const express = require('express');
const app=express();
const port=4000;

//console.log(express);
app.use(express.static('public'));
  const post=[
    {
        titolo: "Ciambellone soffice",
        contenuto: "Una ricetta deliziosa per un ciambellone soffice e profumato.",
        images: "public/images/ciambellone.jpeg",
        tag: ["dolci",  "ciambella"]
    },
    {
        titolo: "Cracker di barbabietola",
        contenuto: "Snack croccanti e salutari a base di barbabietola.",
        images: "public/images/cracker_barbabietola.jpeg",
        tag: ["cracker", "barbabietola"]
    },
    {
        titolo: "Pane Fritto Dolce",
        contenuto: "Pane.",
        images: "public/images/pane_fritto_dolce.jpeg",
        tag: ["pane", "fritto", "dolce"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "pasta alla barbabietola",
        images: "public/images/pasta_barbabietola.jpeg",
        tag: ["pasta", "vegetariano", "barbabietola"]
    },
    {
        titolo: "Torta Paesana",
        contenuto: "Torta",
        images: "public/images/torta_paesana.jpeg",
        tag: ["torta", "paesana", "noci"]
    }
  ]

  app.get('/', (req, res) => {
    res.send('Ricette');
});


app.get('/bacheca', (req, res) => {
    res.json(post);
});


//Porta Server
  app.listen(port, () => {
    console.log(`Server port ${port}`);
  });