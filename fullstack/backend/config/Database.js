import {Sequelize} from "sequelize";

const db = new Sequelize('jscrud','root','',{
	host: 'localhost',
	dialect: 'mysql'
});

export default db;