var nconf = require('nconf');

nconf.argv()
  .env()
  .defaults({
    port: 7112,
    prefix: '',
    hbase: {
      servers: [
        {
          host: 'hbase',
          port: 9090
        }
      ]
    },
    'hbase-rest' : {
      host: 'hbase',
      port: 8080
    }
  });

module.exports = nconf;
