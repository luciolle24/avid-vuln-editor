import { Fragment } from "react";
import MainNavBar from "./main-header";

function Layout(props) {
  return (
    <Fragment>
      <header>
        <MainNavBar />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
