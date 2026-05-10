// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
import pg from "pg";


const fastify = Fastify({
  logger: true
})


const pool = new pg.Pool({
  host: "postgres",
  port: 5432,
  user: "postgres",
  password: "1234",
  database: "app"
});

// Declare a route
fastify.get('/', async function (request, reply) {

  try {
    const result = await pool.query("SELECT NOW() as now");

    reply.send({ 
      message: "Hello World",
      dbTime: result.rows[0].now 
    });
  } catch (error) {
    console.log(error);
    reply.code(500).send({ error: "Database connection failed" });
  }
})

// Run the server!
// Port 9999, é a porta da competição definida no docker-compose.yml
// Nginx vai redirecionar o tráfego para cá na porta 3000
fastify.listen({ port: 9999, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})