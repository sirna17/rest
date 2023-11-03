//la tache avec sequelize
import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';
import jwt from 'jsonwebtoken';

export const User = sequelize.define("users", {

    //add owner to task qui fait reference a l'id de l'utilisateur
    nom: {
        type: DataTypes.STRING,
        allowNull: true,
        trim: true
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: true,
        validate: {
            isInt: {
                args: true,
                msg: "Age must be a number"
            },            
            min: {
                args: 1,
                msg: "Age must be greater than 0"
            },           
        }
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        trim: true,
        validate: {
            isEmail: {
                args: true,
                msg: "Email is invalid"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
        validate: {
            len: {
                args: [7, 200],
                msg: "Password must be between 7 and 100 characters"
            },
            notContains: {
                args: "password",
                msg: "Password cannot contain the word password"
            }
        }
    },  
    token: {
        type: DataTypes.STRING,

    }
    }, {
        // timestamps: false,
        createdAt: false,
        updatedAt: false        
    }
);

User.generateAuthToken = async (user) => {

    // generation de token avec la methode sign de Jwt
    const token = jwt.sign({'id':user.id.toString()}, 'maCleSecrete')

    // ajout du token a l'utilisateur
    user.token = token

    // sauvegarde de l'utilisateur en base de donner
    await user.save()

    // on renvoi le token
    return token
}