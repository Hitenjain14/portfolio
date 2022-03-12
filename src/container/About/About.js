import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

const abouts = [
  {
    title: 'Web Development',
    description: 'I love solving design problems and coding them out',
    imgUrl: '/about01.png',
  },
  {
    title: 'Solidity Developer',
    description:
      'I am confident in writing clean and gas efficient smart contracts using solidity',
    imgUrl: 'https://miro.medium.com/max/1200/0*VGAs9rPj71PDG8nJ.jpg',
  },
  {
    title: 'Backend Development',
    description:
      'I can write server side code using nodeJs and have good knowledge of MongoDB to use as a database',
    imgUrl:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg',
  },
  {
    title: 'Web3 Developer',
    description:
      'I can build fully functional decentralized applications , connecting people to blockchain',
    imgUrl:
      'https://cryptoadventure.com/wp-content/uploads/2020/05/WEB-3.0-1.jpg',
  },
];

function About() {
  return (
    <>
      <h2 className="head-text">
        I Know that
        <span> Good Dev </span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        <div className="about-heading">
          I am a web and ethereum blockchain developer. I am pursuing BTech. in
          Computer Science. I'm quietly confident, naturally curious, and
          perpetually working on improving my chops one logic problem at a time.
        </div>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 10 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
