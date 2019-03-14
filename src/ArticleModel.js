const db = require('./db');

import * as Sequelize from 'sequelize';

const ArticleModel = db.define('articles', {
	id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
    field: 'id'
  },
	categoryId: {
		type: Sequelize.INTEGER,
		field: 'category_id'
  },
  title: {
		type: Sequelize.STRING,
		field: 'title'
  },
  description: {
		type: Sequelize.STRING,
		field: 'description'
  },
  content: {
		type: Sequelize.STRING,
		field: 'content'
  },
  imageSrc: {
		type: Sequelize.STRING,
		field: 'image_src'
  },
  alias: {
    type: Sequelize.STRING,
		field: 'alias'
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE
  },
  updatedAt: {
    field: 'updated_at',
    type: Sequelize.DATE
  },
});

export default ArticleModel;
