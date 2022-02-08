import { Container } from "layout/Container";
import { Header } from "layout/Header";
import Head from "next/head";
import React from "react";
import EditProfile from "templates/Profile";

export default function Profile(): JSX.Element {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <EditProfile />
    </>
  );
}

// Profile.getLayout = function getLayout(page: JSX.Element) {
//   return (
//     <>
//       {/* <Header /> */}
//       <Container>{page}</Container>
//     </>
//   );
// };
