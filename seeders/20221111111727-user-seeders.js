'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'renaldi',
        profession: 'Admin Micro',
        role: 'admin',
        email: 'renaldiramdhan27@gmail.com',
        password: await bcrypt.hash('kokopopo123', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'ramadhan',
        profession: 'Web Developer',
        role: 'student',
        email: 'renaldiramadhann@gmail.com',
        password: await bcrypt.hash('kokopopo123a', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
