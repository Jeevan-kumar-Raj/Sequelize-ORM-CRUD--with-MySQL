module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define(
    "book",
    {
      name: {
        type: Sequelize.STRING(100),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      language: {
        type: Sequelize.STRING(100),
      },
      total_pages: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Book;
};
