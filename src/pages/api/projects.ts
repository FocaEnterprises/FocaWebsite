import { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../services/MongoDB';
import Project, { IProject } from '../../models/Project';
import techs from '../../utils/technologies';

interface IProjectRequest {
  title: string;
  description: string;
  tags: {
    name: string;
    color: string;
    identifier: string;
  }[];
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, tags } = req.body as IProjectRequest;

  if (!title || title.length > 20 || title.length < 4) return res.status(400).json({ error: 'Invalid title' });

  if (!description || description.length > 250 || description.length < 4) return res.status(400).json({ error: 'Invalid description' });

  if (!tags) return res.status(400).json({ error: 'Invalid tags' });

  if (typeof tags !== 'object') return res.status(400).json({ error: 'Invalid tags' });

  try {
    const tagList: string[] = [];

    tags.forEach((tag) => {
      if (!tag.identifier) throw new Error('Invalid tags formmat');

      techs.forEach((tech) => {
        if (tech.identifier === tag.identifier) tagList.push(tech.identifier);
      });
    });

    return Project.create({ title, description, tags: tagList.join(', ') })
      .then(() => res.status(201).json(null))
      .catch(() => res.status(500).json(null));
  } catch {
    return res.status(400).json({ error: 'Invalid tags' });
  }
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  const results: IProject[] = await Project.find();

  return res.status(200).json(results);
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
