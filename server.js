import { fastify } from 'fastify'

const server =  fastify()

server.post('/videos', () =>{
   return 'Hello World!'
});

server.get('/videos', () => {
   return 'Hello Node.JS'
});

server.put('/videos/:id', () => {
   return 'Hello Node.JS'
});

server.delete('/videos/:id', () => {
   return 'Hello Node.JS'
});

server.listen({
   port: 3000
})