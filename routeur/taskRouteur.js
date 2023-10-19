import  express  from "express";

// creation du routeur express
export const taskRouteur = express.Router()

//importer les controlleur
import { getTaskById, postTaskById, deleteTaskId, editTaskId } from "./../controlleur/taskControlleur.js";

//route /users pour obtenir les liste des utilisateurs
taskRouteur.get('/tasks/:id',(req,res) => {
        getTaskById(req,res)
})

taskRouteur.post('/tasks/:id', async (req, res) => {
         postTaskById(req,res)
        
})

taskRouteur.delete('/tasks/:id', async (req, res) => {
        deleteTaskId(req,res)
})

taskRouteur.put('/tasks/:id', async (req, res) => {
        editTaskId(req,res)
})