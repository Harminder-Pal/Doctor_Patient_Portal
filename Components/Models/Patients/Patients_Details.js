const  Sequelize  = require("sequelize");

const sequelize = require('../util/database');

const Patients_Details = sequelize.define('Patients_Details',{
    Patient_Id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    Phone_Number:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Email_Id:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Patients_Details;