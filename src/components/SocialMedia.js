import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className="app__social">
      <div className="">
        <a
          href="https://twitter.com/HitenJa11124464"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div className="">
        <a
          href="https://github.com/hitenjain14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="">
        <a
          href="https://www.linkedin.com/in/hiten-jain-0ba1a31ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
