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



export const sequelize  = new Sequelize(
  process.env.user,
  process.env.password,
  process.env.database,
  {
    define: {
      freezeTableName: true
  }, 
    host: process.env.host,
    dialect:"mysql",
    freezeTableName :true
    
  }
);