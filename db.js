import mysql from "mysql"
export const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'restful_api'
});
 
connection.connect((err) => {
        if(err) throw err
        console.log("ok");
});