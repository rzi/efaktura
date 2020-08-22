const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('elunch_1', 'Bazapi2019', 'Bazapi2019', {
  host: 'rzi.cba.pl',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Nawiązane połączenie z bazą danych.');
  })
  .catch(function (err) {
    console.log('Brak połączenia z bazą danych:', err);
  });
module.exports = db