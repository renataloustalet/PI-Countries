const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: true
    }
  });
};