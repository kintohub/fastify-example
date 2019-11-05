require('dotenv').config();

const GREETING = process.env.GREETING || 'Hello';
const PORT = 80;

const fastify = require('fastify')({
  logger: true
});

// Declare a route
fastify.get('/hello/:name', (request, reply) => {
  reply.send({
    message: `${GREETING} ${request.params.name}`
  });
});

// Run the server!
fastify.listen(80, '0.0.0.0', (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
