const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("app-health", "root", "1234", {
  port: 3307,
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

module.exports = sequelize;
