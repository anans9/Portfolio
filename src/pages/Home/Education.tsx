import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { educationItems } from '../../utils';
import { Timeline } from '../../components';

const Education: React.FC = () => {
  return (
    <Timeline
      items={educationItems}
      title="Education"
      titleIcon={<FaGraduationCap className="w-12 h-12" />}
    />
  );
};

export default Education;
