import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const Judge = await prisma.product.findMany();
  res.json(Judge);
}