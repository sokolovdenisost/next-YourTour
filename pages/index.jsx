import Head from "next/head";
import { HomePage } from "../components/pages/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>YourTour</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <HomePage />
    </>
  );
}
