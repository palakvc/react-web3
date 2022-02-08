import Head from "next/head";
import React from "react";

interface IProps {
  title: string;
  description?: string;
}

function PageHead(props: IProps) {
  const {
    title = "Artistic Marketplace",
    description = "Artistic Marketplace",
  } = props;
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content="Artistic Marketplace" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default PageHead;
