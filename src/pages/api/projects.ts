import { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../utils/MongoDB';
import Project from '../../models/Project';

interface IProject {
  title: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
}

const projects: IProject[] = [
  {
    title: 'FocaWebSite',
    description: 'O site feito sob medida para a dinastia foca (SLA O QUE QUER DIZER!)',
    tags: [
      { name: 'Nodejs', color: '#00ca00' },
      { name: 'React', color: '#5ce2ff' },
      { name: 'Typescript', color: '#2b7489' },
      { name: 'Next.js', color: '#111111' },
    ],
  },
];

async function post(req: NextApiRequest, res: NextApiResponse) {
  const results = await Project.find();
  return res.send(results);
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    projects,
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      return get(req, res);

    case 'POST':
      return post(req, res);

    default:
      return res.status(404).send(null);
  }
};
