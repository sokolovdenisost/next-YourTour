import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Choose } from "../components/Sections/Choose/Choose";
import { Create } from "../components/Sections/Create/Create";
import { History } from "../components/Sections/History/History";
import { Main } from "../components/Sections/Main/Main";
import { Photos } from "../components/Sections/Photos/Photos";
import { Reviews } from "../components/Sections/Reviews/Reviews";
import { Travel } from "../components/Sections/Travel/Travel";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>YourTour</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Main />
      <Choose />
      <Create />
      <Reviews />
      <Photos />
      <History />
      <Travel />

      <Footer />
    </>
  );
}
