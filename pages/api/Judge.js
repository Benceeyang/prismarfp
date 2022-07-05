import prisma from "../../lib/prisma"

export default async function handle(req, res) {
  const ListofCourtOfficials = await prisma.ListofCourtOfficials.findMany();
  res.json(ListofCourtOfficials);
}