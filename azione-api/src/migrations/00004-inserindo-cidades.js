'use strict'

const fs = require('fs');

module.exports = {
    up: async function(queryInterface) {
        return await queryInterface.sequelize.transaction(async transaction => {
            try{
                console.log('Inserindo Cidades');
                await queryInterface.sequelize.query(fs.readFileSync(__dirname +'/../assets/sql/insert-cidades.sql').toString(), { transaction });
                await queryInterface.sequelize.query(fs.readFileSync(__dirname +'/../assets/sql/insert-cidades2.sql').toString(), { transaction });
                await queryInterface.sequelize.query(fs.readFileSync(__dirname +'/../assets/sql/insert-cidades3.sql').toString(), { transaction });
            }
            catch(e){
                throw e;
            }
        });
    },
    down:{
        async function (queryInterface,Sequelize) { }
    }
};