var rest = require('./lib');

var pgConfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'root',
    database: 'tododb'
  },
  pool: { min: 5, max: 150 }
};

var mssqlConfig = {
  client: 'mssql',
  connection: {
    host: '127.0.0.1',
    user: 'sa',
    password: 'root',
    database: 'tododb'
  },
  pool: { min: 5, max: 150 }
}
rest.configure(pgConfig);

// rest.seed([
//     {
//         table: 'user',
//         records: [
//             { id: 1, name: 'Albert Groothedde' },
//             { id: 2, name: 'Lianne Knol' },
//             { id: 3, name: 'Bram Groothedde' }
//         ]
//     }
// ]);

rest.listen(3000);