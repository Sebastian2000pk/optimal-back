import express from "express";
import cors from "cors";
import router from "@/modules";
import sequelize from "@/database/sequelize";
import { config } from "./config";

const app = express();

app.use(router);
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
sequelize
.authenticate()
.then(() => {
  console.log("Conexión a la base de datos establecida correctamente");
})
.catch((error: any) => {
  console.error("Error al intentar conectar a la base de datos:", error);
});

// Iniciar el servidor
const port = config.port;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
