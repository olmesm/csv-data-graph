import Head from "next/head";
import { Nav } from "./Nav";

export const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <title>CSV Data Graph</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <Nav />
      <hr />
    </header>

    <main>{children}</main>
  </div>
);
