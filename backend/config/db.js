import { Sequelize } from "sequelize";

const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    logging:false
})
try {
    await sequelize.authenticate()
    console.log('connection has been established successfully')
} catch (error) {
    console.log('unable to connect to the db',error)
    process.exit(1)
}
export default sequelize