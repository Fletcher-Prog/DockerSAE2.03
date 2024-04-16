import express, { json } from "express"
import { dirname, resolve, extname } from 'path';
import {createReadStream} from 'fs'

// Gestion de l'arbre de fiche
const __dirname = new URL('.', import.meta.url).pathname;
const app = express()

app.use('/',express.static(__dirname + "source/"))

// Redirection vers le ficher netflix.html quand on a /home aprés l'adresse du serveure
app.get('/home', function (req, res) 
{
    res.sendFile(__dirname + 'source/Html/netflix.html');
});

// Redirection vers le ficher acceuil.html quand on a /netflix aprés l'adresse du serveure
app.get('/netflix', function (req, res)
{
    res.sendFile(__dirname + 'source/Html/acceuil.html');
});

// Redirection vers le ficher mediaPlayer.html quand on a /video aprés l'adresse du serveure
app.get("/video", function (req, res) {
 
  res.sendFile(__dirname + 'source/Html/mediaPlayer.html');

});

// Définition et affichage dans la console du port utiliser par le serveur
app.listen(3002, () => {
  console.log(`app listening on port 3002`)
})