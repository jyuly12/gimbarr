import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma'
import { getSession } from 'next-auth/react'


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, video } = req.body;
  const postId = req.query.id;

  const session = await getSession({ req });
  if (session) {
    const result = await prisma.post.update({
        where: { id: Number(postId) },
        data: {
            title: title,
            content: content,
            videoclip: video,
            author: { connect: { email: session?.user?.email } },
        },
    });
    res.json(result);console.log(req.body);
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
