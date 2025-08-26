import PointDot from '@/component/PointDot';

export default function SkillCategory({
  categoryName,
  skills,
}: {
  categoryName: string;
  skills: string[];
}) {
  return (
    <>
      <h3 className={'text-2xl font-bold'}>
        {categoryName}
        <PointDot />
      </h3>
      <hr
        aria-hidden={true}
        className={'text-surface-300 my-2'}
      />
      <ul className={'grid grid-cols-2 lg:block'}>
        {skills.map(skill => (
          <li key={skill}>· {skill}</li>
        ))}
      </ul>
    </>
  );
}
