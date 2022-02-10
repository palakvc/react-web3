import { Container } from "layout/Container";
import { Header } from "layout/Header";
import Homepage from "templates/Homepage";

export default function Home(): JSX.Element {
  return (
    <>
      <Homepage />
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <>
      <Header />
      <Container>{page}</Container>
    </>
  );
};
