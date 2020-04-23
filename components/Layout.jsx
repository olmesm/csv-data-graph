import Head from "next/head";

export const Layout = ({ children }) => (
  <div className="container">
    <Head>
      <title>CSV Data Graph</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>{children}</main>
  </div>
);
