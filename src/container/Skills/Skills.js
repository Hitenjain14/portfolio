import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import './Skills.scss';
import { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { skills } from '../../utils/WorkDone';

function Skills() {
  return (
    <>
      <h2 className="head-text">Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name}
              className="app__skills-item app__flex"
            >
              <div className="app__flex">
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
