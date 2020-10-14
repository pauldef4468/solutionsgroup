import { useContext } from "react";
import Head from "next/head";
import _ from "lodash";
import AppContext from "../context/AppContext";
import Footer from "../pages/footer";
import MyNavbar from "./myNavbar";

// import { logout } from "../lib/auth";
// import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
  const { user, setUser } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>The Solutions Group</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        ></link>

        <script
          src="https://kit.fontawesome.com/94a6e7c62b.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div>{props.children}</div>
      <Footer></Footer>
    </>
  );
}
