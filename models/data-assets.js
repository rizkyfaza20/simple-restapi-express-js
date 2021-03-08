'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_asset = sequelize.define('data_asset',{
    manufacturer:DataTypes.STRING,
    modelBoard:DataTypes.STRING,
    cpu:DataTypes.STRING,
    memory:DataTypes.STRING,
    hdd:DataTypes.STRING,
    display:DataTypes,STRING,
    osversion:DataTypes.STRING
  }, {
    timestamps: true,
    tableName: 'data_assets',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }); {
    data_asset = function(models){
      // Define association here
    };
    return data_asset;
  };
  data - assets.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    tags: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'data-assets',
  });
  return data - assets;
};