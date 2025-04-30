const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "servidor Node no ar" });
}
);

app.listen(PORT, () => {
  console.log(`Servidor rodando, porta ${PORT}`);
}
);
