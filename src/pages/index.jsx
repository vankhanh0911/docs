// Libraries
import React from "react";
import Lottie from "react-lottie";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import IdealImage from "@theme/IdealImage";

// Static
import * as waveAnimation from "@site/static/lottie/wave-animation.json";
import TeamWorkImageUrl from "@site/static/img/teamwork.png";

// Styles
import styles from "./index.module.css";

// Components
import { Members } from "../components/Members";
import { QuoteText } from "../components/QuoteText";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    // <header className={clsx("hero hero--primary", styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/authentication/over-view"
    //       >
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      <div className="flex flex-col lg:items-start items-center justify-center lg:text-left text-center lg:order-none order-last">
        <h1 className="animate__animated animate__fadeIn animate__delay-1s mb-8">
          Antsomi FullStack Team <br /> Documentation
        </h1>
        <p className="animate__animated animate__fadeIn animate__delay-2s max-w-md mb-12">
          This document provides the team with working rules, coding style
          guide, project documentation, packages guide aimed at making the
          project stable and easy to maintain.
        </p>

        <Link
          className="button button--primary animate__animated animate__fadeInUp animate__delay-3s w-fit"
          to="/docs/coding-style-guide/over-view"
        >
          Get Started
        </Link>
      </div>
      <div className="flex flex-col lg:items-end items-center">
        <div
          className={clsx(
            styles.banner__logo,
            "animate__animated animate__fadeInRight animate__delay-1s"
          )}
        >
          <div className="absolute lg:block hidden">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: waveAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={500}
              width={500}
            />
          </div>
          <div className="rounded-full overflow-hidden">
            <IdealImage
              className="lg:w-[380px] lg:h-[380px] w-[300px] h-[300px] -z-10"
              img={TeamWorkImageUrl}
              width="400"
              height="400"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <div className="container lg:pt-28 py-4 lg:px-28 px-4 overflow-hidden">
        <HomepageHeader />

        <div className="animate__animated animate__fadeInLeft animate__delay-1s lg:mt-32 mt-10 lg:block hidden">
          <div className="w-12 h-[3px] bg-slate-400 rounded-sm mb-2" />

          <Members />

          <QuoteText />
        </div>
      </div>

      {/* <TypeIt element={"h3"}>This will be typed in an H3 tag.</TypeIt> */}

      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
