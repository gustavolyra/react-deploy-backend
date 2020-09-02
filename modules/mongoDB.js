const mongoose = require('mongoose');
require('dotenv').config();

/*Conexao com o MongoDB*/
async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://' +
        process.env.USERDB +
        ':' +
        process.env.PWDDB +
        '@cluster0.hjh9y.mongodb.net/joker?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log('Conectado no MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB : ' + error);
  }
}

module.exports = connectDB;
