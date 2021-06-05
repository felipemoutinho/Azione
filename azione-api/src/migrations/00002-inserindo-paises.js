'use strict'

const fs = require('fs');

module.exports = {
    up: async function(queryInterface) {
        return await queryInterface.sequelize.transaction(async transaction => {
            try{
                console.log('Inserindo países');
                await queryInterface.sequelize.query(fs.readFileSync(__dirname +'/../assets/sql/pais.sql').toString(), { transaction });
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