import Link from "@docusaurus/Link";
import { useWindowSize } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';

import clsx from "clsx";
import React from "react";
// import AdSense from "react-adsense";
import styles from "./styles.module.css";
const features = [
  {
    title: <>Supports</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Code has written mainly in typescript. Which is supper set of
        JavaScript. It also supports Deno.
      </>
    ),
  },
  {
    title: <>Focus on Simplicity</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        There is always libary like lodash can be used. However, It is good to
        learn some concept by own.
      </>
    ),
  },
  {
    title: <>Powered by Docusaurus</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing Docusaurus.
        Docusaurus can be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const windowSize = useWindowSize();
  const renderTocDesktop = windowSize === "desktop" || windowSize === "ssr";
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
       <Head>
        {/* <script data-cfasync="false" type="text/javascript" src="/ad_7123489.js"></script> */}
      </Head>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.centerContent}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <video src={"how_to_access_page.mp4"} controls autoPlay />
          </div>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
