import { Container } from "layout/Container";
import { Header } from "layout/Header";
import PageHead from "layout/PageHead";
import React from "react";
import EditProfile from "templates/EditUser";

export default function Profile(): JSX.Element {
  return (
    <>
      <PageHead title="Profile" />
      <EditProfile />
    </>
  );
}

Profile.getLayout = function getLayout(page: JSX.Element) {
  return (
    <>
      <Header />
      <Container>{page}</Container>
    </>
  );
};
