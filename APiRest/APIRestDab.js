const express = require('express');
const app = express();
app.use(express.json());

let accountBalance = 1000;

app.post('/api/withdraw', (req, res) => {
  const amount = req.body.amount;

    if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).send('Montant de retrait invalide.');
  }

  if (amount > accountBalance) {
    return res.status(403).send('Solde insuffisant.');
  }
  accountBalance -= amount;

  res.json({ message: `Retrait de ${amount} effectué avec succès. Solde restant : ${accountBalance}.` });
});

app.get('/api/balance', (req, res) => {
  res.json({ balance: accountBalance });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}.`);
});
