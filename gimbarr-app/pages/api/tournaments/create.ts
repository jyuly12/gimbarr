import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { getSession } from 'next-auth/react'


// POST /api/post
// Required fields in body: title, video
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, location, description, price } = req.body;

  const session = await getSession({ req });
  if (session) {
    const result = await prisma.tournament.create({
      data: {
        title,
        location,
        description,
        price: Number(price),
        sponsor: { connect: { email: session?.user?.email } },
      },
    });
    res.json(result);
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
