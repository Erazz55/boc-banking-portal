import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LandingPageNavigation from "../components/navigation/LandingPageNavigation";
import { ArrowIcon } from "../components/icons/ArrowIcon";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Bank of Ceylon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LandingPageNavigation />

      <div className="hello">
        <div className="space-y-4">
          <h1 className="main-text">"manage your accounts yourself"</h1>
          <h1 className="main-sub-text">
            It's easy and free to build better life with banking.
          </h1>
        </div>
        <Link href="/auth/register">
          <div className="register-button">
            <h1>Register Now</h1>
            <ArrowIcon className="arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
