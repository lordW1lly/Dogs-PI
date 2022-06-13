const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Temperament', 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      id: {
        type: DataTypes.TEXT,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        /* allowNull: false,
        unique: true, */
      },
     
  
    });
  };
  