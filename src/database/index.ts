import Sequelize from 'sequelize';
//import { UserModel }  from '../app/models/UserModel'
import databaseConfig from '../../sequelize.js';

 

class Database {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize.Sequelize(databaseConfig);
  }
}

const database: Database = new Database();

export default database;