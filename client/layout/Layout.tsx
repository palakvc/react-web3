import React, { useEffect } from "react";
import Head from "next/head";
// import { useSelector, useDispatch } from "react-redux";
// import { Snackbar } from "components/Snackbar";
// import { InfoIcon } from "icons";
// import { showMessage } from "store/snackbarSlice";
import { Container } from "./Container";
import { Header } from "./Header";
import Toast from "components/Toast";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  // const { snackbarData } = useSelector(({ snackbar }) => snackbar);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const onShowAlert = () => {
  //     setTimeout(() => {
  //       dispatch(showMessage({ message: "", description:"", type: "info" }));
  //     }, 3000);
  //   };
  //   if (snackbarData.message) {
  //     onShowAlert();
  //   }
  // }, [dispatch, snackbarData]);

  // const handleCancel = () => {
  //   dispatch(showMessage({ message: "", description:"", type: "info" }));
  // }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="Artistic Marketplace" />
        <meta name="description" content="Artistic Marketplace description" />
        <title>Artistic Marketplace</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* {Boolean(snackbarData.message) && (
        <Snackbar
          icon={<InfoIcon />}
          valign="top"
          halign="right"
          variant={snackbarData.type}
          title={snackbarData.message}
          description={snackbarData.description}
          handleCancel={handleCancel}
        />
      )} */}
      <Header />
      {/* <main> */}
      {/* <Container>{children}</Container> */}
      {children}
      {/* </main> */}
    </>
  );
}
