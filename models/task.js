//la tache avec sequelize
import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Task = sequelize.define("tasks", {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },    
        complete: {
            type: DataTypes.BOOLEAN,
        },
        //add owner to task qui fait reference a l'id de l'utilisateur
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false,
            ref: {
                model: 'User',
                key: 'id'
            }
        }
     },   
  
     { 
         createdAt: false, 
         updatedAt: false,        
     }
); 