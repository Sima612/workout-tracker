// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Exercise extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Exercise.init({
//     exercise_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     date: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     exerciseName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     sets: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     reps: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     lbs: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: 'Exercise',
//     tableName: 'exercises',
//     timestamps: false
//   });
//   return Exercise;
// };