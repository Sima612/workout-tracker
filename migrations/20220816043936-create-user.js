// 'use strict';
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('users', {
//       user_id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//       },
//       weight: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('users');
//   }
// };