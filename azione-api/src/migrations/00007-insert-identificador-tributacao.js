'use strict'

const fs = require('fs');

module.exports = {
    up: async function(queryInterface) {
        return await queryInterface.sequelize.transaction(async transaction => {
            try{
                console.log('Inserindo Indicadores Tributação');
                await queryInterface.sequelize.query(fs.readFileSync(__dirname +'/../assets/sql/insert-indicadores-tributacao.sql').toString(), { transaction });
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