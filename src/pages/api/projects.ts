import { NextApiRequest, NextApiResponse } from 'next';

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

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(404).json(null);
    return;
  }

  res.status(200).json({
    projects,
  });
};
