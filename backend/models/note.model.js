import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Note=sequelize.define("Note",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
export default Note