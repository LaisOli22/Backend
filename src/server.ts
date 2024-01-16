import fastify from "fastify";
import { prisma } from "./lib/prisma";

const server = fastify();

server.get("/products", async (req, reply) => {
    const allProducts = await prisma.produtos.findMany();
    reply.send({ products: allProducts });
});

server.get("/products/:productname/:price", async (req, reply) => {
    const { productname, price } = req.params;
  await prisma.produtos.create({
    data: {
      nome: productname,
      preco: parseFloat(price),
    },
  });
  reply.send({ message: "Product added successfully" });
});

server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
