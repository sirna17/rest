
import { User } from "./../models/user.js"
export async function getAllUsers (req, res) {
        // connection.query('SELECT * FROM users', (error, results) => {
        //         if (error) throw error;

        //         for (let i = 0; i < results.length; i++) {
        //                 console.log('#ID : ', results[i].id);
        //                 console.log('Nom : ', results[i].nom);
        //                 console.log('Email : ', results[i].email);
        //                 console.log('Password : ', results[i].password);
        //         }
        //         res.send(results)
        // });

        // connection.end();

        

        
        try{
                //findAll() permet de récupérer tous les enregistrements de la table
                const users = await User.findAll();
                        
        
        if (!users){
               res.status(404).send('pas trouvé de tâche')
        }{
                res.status(200).send (users);
        }
        }catch(error) {
                res.send(error)
        }
        console.log('coucou');

}

export function getUserId () {
        connection.query('SELECT id FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('#ID : ', results[i].id);
                }
        })
};

export async function postUser (req, res) {
       
        try {

                //hash password - 10 fait référence au nombre de tour de hashage. On peut l'ajouter au fichier .env      
                const hashedPassword = await bcrypt.hash(req.body.password, 10);        
        
                const user = await User.create({
                    nom: req.body.nom,
                    age: req.body.age,
                    email: req.body.email,
                    password: hashedPassword
                });        
        
                if(!user) {
                    res.status(404).send('no users found')
                }
        
                res.status(200).send(user);
            } catch (error) {
                res.send(error)
            }
        }

