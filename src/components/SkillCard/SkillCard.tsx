import React from 'react';
import { toSentenceCase } from '../../utils/string';

type Props = {
  category: string;
  list: string[];
};

const SkillCard = ({ category, list, ...others }: Props) => (
  <div className="skill-card" {...others}>
    <div className="skill-card__head">{toSentenceCase(category)}</div>
    <div className="skill-card__body">
      {list.map((item) => (
        <div key={item} className="skill-card__item">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default SkillCard;
