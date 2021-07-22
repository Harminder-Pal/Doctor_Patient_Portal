const  Sequelize  = require("sequelize");

const sequelize = require('../../util/database');

const Cancel_Appointment = sequelize.define('Cancel_Appointment',{
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
    },
    Date:{
        type:Sequelize.DATE,
        allowNull:false
    },
    Time:{
        type:Sequelize.TIME,
        allowNull:false
    },
    Reason:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Cancel_Appointment;