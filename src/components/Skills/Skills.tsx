import React from 'react';
import Section from '../Section';
import SkillCard from '../SkillCard';

type Props = {
  title: string;
  skills: {
    frontEnd: string[];
    backEnd: string[];
    fullStack: string[];
    documentation: string[];
    sourceControl: string[];
    learning: string[];
  };
};

const Skills = ({ title, skills, ...others }: Props) => (
  <Section title={title} {...others}>
    <div className="skills">
      <div className="skills__list">
        {Object.entries(skills).map(([category, list]) => (
          <SkillCard key={category} category={category} list={list} />
        ))}
      </div>
    </div>
  </Section>
);

export default Skills;
