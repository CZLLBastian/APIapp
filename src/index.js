const express = require('express');
const app = express();
const userRoutes = require('./routes/users.routes');
const questionRoutes = require('./routes/questions.routes');
const historialRoutes = require('./routes/historial.routes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/historial', historialRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
