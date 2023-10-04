
import {connection} from "../db.js"
export function getAllUsers() {
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

export function getUserId () {
        connection.query('SELECT id FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('#ID : ', results[i].id);
                }
        })
};

export function  getTaskFromNameUser () {
        connection.query('SELECT nom FROM users', (error, results) => {
                if (error) throw error;

                for (let i = 0; i < results.length; i++) {
                        console.log('Nom : ', results[i].nom);
                }
        })
};