const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

/* In a production environment, you would want to put your configuration details in a separate 
file with restrictive permissions that is not accessible from version control, 
but for the simplicity of this tutorial , we’re keeping it in the same file as the queries.
https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/ */
