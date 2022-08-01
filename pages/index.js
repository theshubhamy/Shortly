import Head from "next/head";
/*****components********/
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import UrlShortner from "../components/urlShortner/UrlShortner";
import AdvStats from "../components/features/AdvStats";
export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <meta
          name="description"
          content="Shortly - More than just shorter links "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/logo_white.svg" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <UrlShortner />
        <AdvStats />
      </main>
    </>
  );
}
