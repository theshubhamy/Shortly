import Head from "next/head";
import { theme } from "../styles/Theme";
import Navbar from "../components/navbar/Navbar";
import { ThemeProvider } from "styled-components";
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Shortly</title>
        <meta
          name="description"
          content="Shortly - More than just shorter links "
        />
        <link rel="icon" href="/assets/logo_white.svg" />
      </Head>
      <main>
        <Navbar />
      </main>
    </ThemeProvider>
  );
}
