import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import App from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-06-19 21:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: new Date('2021-06-25 14:00:00'),
        },
        {
          id: 3,
          title: 'Projeto React',
          type: 'deposity',
          category: 'Dev',
          amount: 11200,
          createdAt: new Date('2021-06-03 11:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => [this.schema.all('transaction')]);
    this.post('/transactions', (sechema, request) => {
      const data = JSON.parse(request.requestBody);

      return this.schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
