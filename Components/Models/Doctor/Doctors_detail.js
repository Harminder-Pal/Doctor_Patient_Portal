const  Sequelize  = require("sequelize");

const sequelize = require('../util/database');

const Doctors_detail = sequelize.define('Doctors_detail',{
    Doctor_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    Speciality:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Clinic_Name:{
        type:Sequelize.STRING,
        allowNull:false
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

module.exports = Doctors_detail;