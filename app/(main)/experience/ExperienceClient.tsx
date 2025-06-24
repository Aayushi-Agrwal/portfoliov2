'use client';

import dynamic from 'next/dynamic';
import { IExperience } from './MapExperience';

const MapExperience = dynamic(() => import('./MapExperience'), { ssr: false });

interface Props {
  experienceData: IExperience[];
}

const ExperienceClient = ({ experienceData }: Props) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Experience</h1>
      <MapExperience experienceData={experienceData} />
    </div>
  );
};

export default ExperienceClient;
