const { Sequelize } = require('sequelize');
import { config } from "@/config";

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: 'mssql', // Usamos 'mssql' para bases de datos SQL Server
  dialectOptions: {
    options: {
      encrypt: true, // Para Azure, es necesario usar conexión encriptada
      trustServerCertificate: false
    }
  },
  logging: false // Para desactivar el log en consola (opcional)
});

export default sequelize;
