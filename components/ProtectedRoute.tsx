import { NextPage } from "next";
import Router from "next/router";

const redirectToLogin = res => {
  if (res) {
    res.writeHead(302, { Location: "/" });
    res.end();
    res.finished = true;
  } else {
    Router.push("/");
  }
};

export const ProtectedRoute = (Component: NextPage) => {
  Component.getInitialProps = async ({ req, res }) => {
    if (req && !(req as any).session.email) {
      redirectToLogin(res);
    }

    return {};
  };

  return Component;
};
