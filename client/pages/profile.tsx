import { Container } from "layout/Container";
import { Header } from "layout/Header";
import React from "react";
import EditProfile from "templates/EditProfile";

export default function Profile(): JSX.Element {
  return (
    <>
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
