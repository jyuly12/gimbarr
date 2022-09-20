import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma'
import { getSession } from 'next-auth/react'


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, location, price } = req.body;
  const TournamentId = req.query.id;

  const session = await getSession({ req });
  if (session) {
    const result = await prisma.tournament.update({
        where: { id: Number(TournamentId) },
        data: {
            title: title,
            description: description,
            location: location,
            price: price,
            sponsor: { connect: { email: session?.user?.email } },
        },
    });
    res.json(result);console.log(req.body);
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
