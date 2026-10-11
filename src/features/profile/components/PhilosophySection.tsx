import React from 'react';
import { ManifestoSection } from './ManifestoSection';
import { SiteProfile } from '../../../types/content.types';

export interface PhilosophySectionProps {
  profile?: SiteProfile;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = () => {
  return <ManifestoSection />;
};
