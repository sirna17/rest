
import {connection} from "../db.js"
export function  getTaskFromNameUser () {
        connection.query('SELECT nom FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('Nom : ', results[i].nom);
                }
        })
};

export function editOneTasksById (id,description) {
        connection.query("UPDATE tasks SET description = ? WHERE id = ?",[description,id], (error, results) => {
                if (error) {
                        console.log('error')
                }
                console.log(results)
        })

}
export const getTaskById = (req, res) =>{
        const id = req.params.id
        connection.query('SELECT * FROM tasks WHERE id = ?',[id], (error, results) => {
                if (error){
                        console.log('error')
                }   
                // console.log(results)   
                res.status(200).send(results)  
        })
}

export const postTaskById = (req, res) => {
        const id = req.params.id;
        const description = req.body.description;
        const complete = req.body.complete;
        connection.query('INSERT INTO tasks (description ,owner, complete) VALUES (?, ?, ?)', [description, id, complete], (error, result)=>{
                if (error){
                        console.log('erreur')
                 }
                res.send(result)
        })
}
 // pour supprimer
 export const deleteTaskId = (req, res) => {
         const id = req.params.id;
         const description = req.body.description;
         const complete = req.body.complete;
         connection.query('DELETE FROM tasks WHERE id = ?',[id], (error, results) => {
                if (error){
                        console.log('erreur')
                 }
                res.send('la tache a été supprimer')
        })

 }

 export const editTaskId = (req, res) => {
        const id = req.params.id;
        const description = req.body.description;
        const complete = req.body.complete;
        connection.query('UPDATE tasks SET description = ?, complete = ? WHERE owner = ?',[description, complete, id], (error, results) => {
               if (error){
                       console.log('erreur')
                }
               res.send(results)
       })

}