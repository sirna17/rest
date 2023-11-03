
import { User } from "./../models/user.js"
import bcrypt from 'bcrypt';
export async function getAllUsers(req, res) {
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




        try {
                //findAll() permet de récupérer tous les enregistrements de la table
                const users = await User.findAll();

                if (!users) {
                        res.status(404).send('pas trouvé de tâche')
                } {
                        res.status(200).send(users);
                }

                // if (!users) res.status(404).send('pas trouvé de tâche')
                // else res.status(200).send (users);
        } catch (error) {
                res.send(error)
        }

}

export function getUserId() {
        connection.query('SELECT id FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('#ID : ', results[i].id);
                }
        })
};

export async function postUser(req, res) {

        try {
                console.log('toto');
                //hash password - 10 fait référence au nombre de tour de hashage. On peut l'ajouter au fichier .env      
                const hashedPassword = await bcrypt.hash(req.body.password, 10);

                const user = await User.create({
                        nom: req.body.nom,
                        age: req.body.age,
                        email: req.body.email,
                        password: hashedPassword

                });
                if (!user) {
                        res.status(404).send('no users found')
                }

                res.status(200).send(user);

        } catch (error) {
                res.send(error)
        }

};
export async function loginUser(req, res) {
        try {
                // on vas verifier si l'utilisateur existe bien en base de donner 

                // on recupere l'email et la password 
                const email = req.body.email
                const password = req.body.password

                const user = await User.findOne({
                        where: { email: email }
                })

                if (!user) throw "pas d'utilisateur avec cette email"
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) throw "pas le bon mot de passe"


                // l'utilisateur existe on vas lui ajouter un token
                const token = await User.generateAuthToken(user)
                res.send(user)


        } catch (error) {
                res.status(400).send(error)
        }
}



