import  express  from "express";

// creation du routeur express
export const taskRouteur = express.Router()
import {auth} from './../middleware/auth.js';
//importer les controlleur
import {getAllTask, getTaskFromNameUser, getTaskById, postTaskById, deleteTaskId, editTaskId, editOneTasksById } from "./../controlleur/taskControlleur.js";

//route /users pour obtenir les liste des utilisateurs
taskRouteur.get('/tasks',auth,(req,res) => {
        getAllTask(req,res)
})
taskRouteur.get('/tasks/:id',auth, async (req, res) => {
        getTaskFromNameUser(req,res)
})
taskRouteur.get('/tasks/:id', async (req, res) => {
        editOneTasksById(req,res)
})

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