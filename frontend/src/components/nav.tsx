import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathanhuang1/';
const GITHUB_URL = 'https://github.com/jonathanhuang13';

export default function Nav(): JSX.Element {
  return (
    <nav className="flex justify-between mb-4 md:mb-8 dark:text-gray-100">
      <Link href="/">
        <button className="h-6 w-6 md:h-8 md:w-8 relative">
          <Image className="" src={'/images/logo.svg'} layout="fill" />
        </button>
      </Link>

      {/* Mobile Icons */}
      <div className="md:hidden">
        <a href={LINKEDIN_URL} target="_blank">
          <FontAwesomeIcon className="mr-4 dark:text-white" icon={faLinkedinIn} />
        </a>
        <a href={GITHUB_URL} target="_blank">
          <FontAwesomeIcon className="dark:text-white" icon={faGithub} />
        </a>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:block">
        <a href={LINKEDIN_URL} target="_blank">
          <FontAwesomeIcon className="mr-4 dark:text-white" icon={faLinkedinIn} size="lg" />
        </a>
        <a href={GITHUB_URL} target="_blank">
          <FontAwesomeIcon className="dark:text-white" icon={faGithub} size="lg" />
        </a>
      </div>
    </nav>
  );
}
