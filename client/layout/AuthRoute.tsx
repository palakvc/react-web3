import { useAppSelector } from "store";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

function withAuth<T>(Component: NextComponentType<T>) {
  const Auth = (props: T) => {
    const router = useRouter();
    const { isLoggedIn } = useAppSelector(({ auth }) => auth);

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/");
      }
    }, [isLoggedIn, router]);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
