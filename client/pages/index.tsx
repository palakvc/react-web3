import { Container } from "layout/Container";
import { Header } from "layout/Header";
import PageHead from "layout/PageHead";
import Homepage from "templates/Homepage";

export default function Home(): JSX.Element {
  return (
    <>
      <PageHead title="Artistic" />
      <Homepage />
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <>
      <Header />
      <>{page}</>
    </>
  );
};
