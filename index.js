console.log('coucou');


//  getUserId();

// getTaskFromNameUser();

// getAllUsers();

// editOneTasksById (2,"boire de l'eau");


import  express  from "express";
//app est la variable qui contient mon serveur web
const app = express()


// import './db.js';

// import de routeur

import { userRouteur } from "./routeur/userRouteur.js";
import { taskRouteur } from "./routeur/taskRouteur.js";
app.use(express.json())
app.use(userRouteur)
app.use(taskRouteur)
app.set('view engine', 'ejs')

// creation d'une route sur l'adress /
app.get('/', function (req, res) {
        //res est la variable qui contient la reponse envoyer au client,ici j'envoie du html avec Pierre dedans 
        res.render('index', { title: 'Restful Api' });
})
// creation d'une route sur l'adress /json
app.get('/json', function (req, res) {
        //ici je renvoie du json
        res.json({
                'prenom':'Pierre',
                'age':36
        })
          
})
//ajout d'une route sur /mon-api qui vas renvoyé une api sur naruto personalisé
import {customApiControlleur} from './controlleur/customControlleur.js'
app.get('/mon-api', function (req, res) {
        //fetch recuperer l'api naruto
         customApiControlleur(req,res)
})
//pour demarer le serveur
app.listen(3000,function(){
        console.log('serveur demarer')

})



      
     
      