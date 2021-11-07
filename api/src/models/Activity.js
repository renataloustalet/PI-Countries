const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull: true
    },
    createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
  });
};