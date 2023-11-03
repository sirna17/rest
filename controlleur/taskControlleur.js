
import { Task } from "../models/task.js"

export async function getAllTask (req, res) {
        //  connection.query('SELECT * FROM tasks', (error, results) => {
        //         if (error) throw error;

        //         for (let i = 0; i < results.length; i++) {
        //                 console.log('#ID : ', results[i].id);
        //                 console.log('Description : ', results[i].Description);
        //                 console.log('Complete : ', results[i].Complete);
        //                 console.log('Owner : ', results[i].owner);

        //         }
        //         res.send(results)
        // });
        // connection.end();
        try{
                const tasks = await Task.findAll()
                console.log(tasks)
                res.send (tasks)
        }catch (error) {
                res.send (error)
        }
}
export async function  getTaskFromNameUser (req,res) {
                // connection.query('SELECT nom FROM users', (error, results) => {
                //         if (error) throw error;

                //         for (let i = 0; i < results.length; i++) {
                //                 console.log('Nom : ', results[i].nom);
                //         }
                // })
                try{
                        //findAll() permet de récupérer tous les enregistrements de la table
                        const tasks = await Task.findAll({
                                where: {
                                  id : req.params.id
                                }
                                })
                
                if (!tasks){
                       res.status(404).send('pas trouvé de tâche')
                }
                res.status(200).send (tasks);
                
                }catch(error) {
                        res.send(error)
                }
};

export async function editOneTasksById   (id,description)  {
        // connection.query("UPDATE tasks SET description = ? WHERE id = ?",[description,id], (error, results) => {
        //         if (error) {
        //                 console.log('error')
        //         }
        //         console.log(results)
        // })
        try{
                const tasks = await Task.findAll({
                        where: {
                          id : req.params.id
                        }
                        })
        
        if (!tasks){
               res.status(404).send('pas trouvé de tâche')
        }{
                res.status(200).send (tasks);
        }
        }catch(error) {
                res.send(error)
        }
};

export  const getTaskById = async (req, res) =>{
        //on récupére l'id de la tache dans l'url
        // const id = req.params.id
        // connection.query('SELECT * FROM tasks WHERE id = ?',[id], (error, results) => {
        //         if (error){
        //                 console.log('error')
        //         }   
        //         // console.log(results)   
        //         res.status(200).send(results)  
        // })
        try{
                const tasks = await Task.findAll({
                        where: {
                          id : req.params.id
                        }
                        })
        
        if (!tasks){
               res.status(404).send('pas trouvé de tâche')
        }{
                res.status(200).send (tasks);
        }
        }catch(error) {
                res.send(error)
        }
};

export const postTaskById = async (req, res) => {
        // const id = req.params.id;
        // const description = req.body.description;
        // const complete = req.body.complete;
        // connection.query('INSERT INTO tasks (description ,owner, complete) VALUES (?, ?, ?)', [description, id, complete], (error, result)=>{
        //         if (error){
        //                 console.log('erreur')
        //          }
        //         res.send(result)
        // })
        try{
                const tasks = await Task.findAll({
                        where: {
                          id : req.params.id
                        }
                        })
        
        if (!tasks){
               res.status(404).send('pas trouvé de tâche')
        }{
                res.status(200).send (tasks);
        }
        }catch(error) {
                res.send(error)
        }
        
}
 // pour supprimer
 export const deleteTaskId = async (req, res) => {
        //  const id = req.params.id;
        //  const description = req.body.description;
        //  const complete = req.body.complete;
        //  connection.query('DELETE FROM tasks WHERE id = ?',[id], (error, results) => {
        //         if (error){
        //                 console.log('erreur')
        //          }
        //         res.send('la tache a été supprimer')
        // })
        try{
                const tasks = await Task.findAll({
                        where: {
                          id : req.params.id
                        }
                        })
        
        if (!tasks){
               res.status(404).send('pas trouvé de tâche')
        }{
                res.status(200).send (tasks);
        }
        }catch(error) {
                res.send(error)
        }

 }

 export const editTaskId = async (req, res) => {
//         const id = req.params.id;
//         const description = req.body.description;
//         const complete = req.body.complete;
//         connection.query('UPDATE tasks SET description = ?, complete = ? WHERE owner = ?',[description, complete,id], (error, results) => {
//                if (error){
//                        console.log('erreur')
//                 }
//                res.send(results)
//        })

try{
        const tasks = await Task.findAll({
                where: {
                  id : req.params.id
                }
                })

if (!tasks){
       res.status(404).send('pas trouvé de tâche')
}{
        res.status(200).send (tasks);
}
}catch(error) {
        res.send(error)
}

}