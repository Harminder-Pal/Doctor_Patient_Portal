const  Sequelize  = require("sequelize");

const sequelize = require('../../util/database');

const New_Appointment = sequelize.define('New_Appointment',{
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
    }
})

module.exports = New_Appointment;