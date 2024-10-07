import Head from 'next/head';

export default function Header() {
  return (
    <Head>
      <title>Mohamed Lassoued Portfolio</title>
      <meta name="description" content="Welcome to the portfolio of Mohamed Lassoued, a passionate MERN stack developer and photographer." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" /> {/* Add a favicon if you have one */}
    </Head>
  );
}
