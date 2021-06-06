'use strict'

const fs = require('fs');

module.exports = {
    up: async function(queryInterface) {
        return await queryInterface.sequelize.transaction(async transaction => {
            try{
                console.log('Alterando tabela pessoa endereço');
                await queryInterface.sequelize.query('ALTER TABLE base.pessoaendereco ADD COLUMN complemento character varying(60)', { transaction });
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