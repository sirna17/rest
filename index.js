console.log("toto");

// import du paquet mysql pour pouvoir l'utilisation ici 
import mysql from "mysql"
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'restful_api'
});
 
connection.connect((err) => {
        if(err) throw err
        console.log("ok");
});

function getAllUsers() {
        connection.query('SELECT * FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('#ID : ', results[i].id);
                        console.log('Nom : ', results[i].nom);
                        console.log('Email : ', results[i].email);
                        console.log('Password : ', results[i].password);
                }
        });

        connection.end();
}

// getAllUsers();

function getUserId () {
        connection.query('SELECT id FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('#ID : ', results[i].id);
                }
        })
};
// getUserId();

function  getTaskFromNameUser () {
        connection.query('SELECT nom FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('Nom : ', results[i].nom);
                }
        })
};
getTaskFromNameUser ();
      
        
      