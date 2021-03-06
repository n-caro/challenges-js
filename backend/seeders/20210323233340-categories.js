"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Javascript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Node.js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "React",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Typescript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
