export interface ITech {
  name: string,
  color: string;
  identifier: string;
}

const technologies: ITech[] = [
  { name: 'Nodejs', color: '#00ca00', identifier: 'nodejs' },
  { name: 'Reactjs', color: '#5ce2ff', identifier: 'reactjs' },
  { name: 'React-Native', color: '#007193', identifier: 'react-native' },
  { name: 'HTML', color: '#e34c26', identifier: 'html' },
  { name: 'CSS', color: '#563d7c', identifier: 'css' },
  { name: 'Javascript', color: '#f1e05a', identifier: 'javascript' },
  { name: 'Typescript', color: '#2b7489', identifier: 'typescript' },
  { name: 'Next.js', color: '#111111', identifier: 'next.js' },
  { name: 'Python', color: '#3572A5', identifier: 'python' },
];

export default technologies;
