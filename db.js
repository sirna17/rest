import dotenv from "dotenv"
dotenv.config()

// import mysql from "mysql"
// export const connection = mysql.createConnection({
//   host     : process.env.host,
//   user     : process.env.user,
//   password : process.env.password,
//   database : process.env.database
// });
  
// connection.connect((err) => {
//         if(err) throw err
//         console.log("base de donner demarer");
// });

import { Sequelize } from 'sequelize';
import process from 'process';
// import mysql  from 'mysql2';
// export const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'restful_api'
// });
export const sequelize  = new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
    define: {
      freezeTableName: true
  }, 
    host: 'localhost',
    dialect:"mysql",
  }
);
// connection.query(
//   'SELECT * FROM `tasks`',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
