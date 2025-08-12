'use client';

import { Skill, SkillKey } from '@/types';
import PointText from '@/component/PointText';
import { motion } from 'framer-motion';

export default function Skills({ skills }: { skills: Skill }) {
  return (
    <div className={'mx-8 flex flex-col gap-8 lg:mx-12 lg:flex-row'}>
      {Object.keys(skills).map((key, index) => (
        <motion.div
          key={key}
          className={'w-full'}
          initial={{ opacity: 0, translateY: 20 }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          <h3 className={'text-2xl font-bold'}>
            {key}
            <PointText>.</PointText>
          </h3>
          <hr
            aria-hidden={true}
            className={'text-surface-300 my-2'}
          />
          <ul className={'grid grid-cols-2 lg:block'}>
            {skills[key as SkillKey].map(skill => (
              <li key={skill}>· {skill}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
