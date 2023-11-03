import  express  from "express";

// creation du routeur express
export const userRouteur = express.Router()

//importer les controlleur
import { getAllUsers, postUser, loginUser} from "./../controlleur/userControlleur.js";

//route /users pour obtenir les liste des utilisateurs
userRouteur.get('/users',(req,res) => {
        getAllUsers(req,res)
        
})
userRouteur.post('/users',(req,res) => {
        postUser(req,res)
        
})
userRouteur.post('/login',(req,res) => {
        loginUser(req,res)
        
})




