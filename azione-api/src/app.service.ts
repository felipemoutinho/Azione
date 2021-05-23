import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  
  constructor(private sequelize: Sequelize) {
  }
  getHello(): string {
    this.sequelize
        .authenticate()
          .then(() => {
            console.log('Connection has been established successfully.');
          })
          .catch(err => {
            console.error('Unable to connect to the database:', err);
          });
    return 'Hello World!';
  }
}
