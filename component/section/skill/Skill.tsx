'use client';

import { Skills } from '@/types';
import { motion } from 'framer-motion';
import SkillCategory from '@/component/section/skill/SkillCategory';

export default function Skill({ skills }: { skills: Skills }) {
  return (
    <div className={'mx-8 flex flex-col gap-8 lg:mx-12 lg:flex-row'}>
      {Object.entries(skills).map(
        ([categoryName, skillCategoryList], index) => (
          <motion.div
            key={categoryName}
            className={'w-full'}
            initial={{ opacity: 0, translateY: 20 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            <SkillCategory
              categoryName={categoryName}
              skills={skillCategoryList}
            />
          </motion.div>
        ),
      )}
    </div>
  );
}
