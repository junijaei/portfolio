import { Skill, SkillKey } from '@/types';
import PointText from '@/component/PointText';

export default function Skills({ skills }: { skills: Skill }) {
  return (
    <div className={'mx-12 flex gap-8'}>
      {Object.keys(skills).map(key => (
        <ul
          key={key}
          className={'w-full'}
        >
          <h3 className={'text-2xl font-bold'}>
            {key}
            <PointText>.</PointText>
          </h3>
          <hr className={'text-surface-300 my-2'} />
          {skills[key as SkillKey].map(skill => (
            <li key={skill}>· {skill}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}
