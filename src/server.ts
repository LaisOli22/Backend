import fastify from "fastify";
import { prisma } from "./lib/prisma";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client';
const server = fastify();
const prisma = new PrismaClient();

server.register(cors), {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}; 

server.get("/products", async (req, reply) => {
    const products = await prisma.produtos.findMany();
    console.log(products);
    reply.send(products);
});

server.post("/products", async (req, reply) => {
  const { name } = req.body;

  try {
    const newProduct = await prisma.produtos.create({
      data: {
        nome: name,
        preco: 0, 
      },
    });
  reply.send({newProduct});
  
} catch (error) {
  console.error('Erro ao adicionar produto:', error);
  reply.status(500).send({ error: 'Internal Server Error' });
}
});

server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
