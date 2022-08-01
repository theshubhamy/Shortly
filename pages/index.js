import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
/*****components********/
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import UrlShortner from "../components/urlShortner/UrlShortner";
import AdvStats from "../components/features/AdvStats";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
      <Footer />
    </ThemeProvider>
  );
}
