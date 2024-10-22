import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Endpoint básico
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo desde TypeScript y Express!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});