import express from 'express';
import router from './modules';

const app = express();
const port = 3000;

app.use(router);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});