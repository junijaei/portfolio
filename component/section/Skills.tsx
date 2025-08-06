import { Skill, SkillKey } from '@/types';
import PointText from '@/component/PointText';

export default function Skills({ skills }: { skills: Skill }) {
  return (
    <div className={'mx-8 flex flex-col gap-8 lg:mx-12 lg:flex-row'}>
      {Object.keys(skills).map(key => (
        <div
          key={key}
          className={'w-full'}
        >
          <h3 className={'text-2xl font-bold'}>
            {key}
            <PointText>.</PointText>
          </h3>
          <hr className={'text-surface-300 my-2'} />
          <ul className={'grid grid-cols-2 lg:block'}>
            {skills[key as SkillKey].map(skill => (
              <li key={skill}>· {skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
