import PageHead from "layout/PageHead";
import useUser from "lib/useUser";
import React from "react";
import EditProfile from "templates/Profile";

export default function Profile(): JSX.Element {
  return (
    <>
      <PageHead title="Profile" />
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
