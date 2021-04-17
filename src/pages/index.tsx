import Head from 'next/head';

interface LetterAttributes {
  color: 'black' | 'green' | 'red' | 'yellow' | 'blue' | 'indigo' | 'pink';
  decoration?: 'italic' | 'font-bold' | 'underline';
}

const letterAttributes: LetterAttributes[] = [
  { color: 'green', decoration: 'font-bold' },
  { color: 'black', decoration: 'italic' },
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue', decoration: 'underline' },
  { color: 'indigo' },
  { color: 'pink', decoration: 'font-bold' },
];

const HAPPY = ['H', 'A', 'P', 'P', 'Y'];
const BIRTHDAY = ['B', 'I', 'R', 'T', 'H', 'D', 'A', 'Y', '!', '!'];

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Elysa Kohrs</title>
      </Head>
      <div className="flex border-4 border-red-500 justify-center items-center self-center w-1/2 h-24">
        {HAPPY.map((character) => (
          <span className={`text-5xl mr-1 ${getRandomAttributes()}`}>{character}</span>
        ))}
        <span className="w-6" />
        {BIRTHDAY.map((character) => (
          <span className={`text-5xl mr-1 ${getRandomAttributes()}`}>{character}</span>
        ))}
      </div>
    </div>
  );
}

function getRandomAttributes(): string {
  const randomIndex = Math.floor(Math.random() * letterAttributes.length);
  const attributes = letterAttributes[randomIndex];

  return `text-${attributes.color}-500 ${attributes.decoration}`;
}
