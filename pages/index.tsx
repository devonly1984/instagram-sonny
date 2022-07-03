import type { NextPage } from "next";
import Head from "next/head";

import { Header, Feed, Modal } from "../components";
const Home: NextPage = () => {
  return (
    <div className=" bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>InstaGram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
};

export default Home;
