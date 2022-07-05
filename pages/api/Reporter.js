import prisma from "../../lib/prisma"

export default async function handle(req, res) {
  const ListofCourtReporters = await prisma.ListofCourtReporters.findMany();
  res.json(ListofCourtReporters);
}