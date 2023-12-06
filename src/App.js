import { Fragment } from "react";
import "./App.css";
import SubNav from "./Components/Sub-Nav/subNav";
import MainNav from "./Components/Main-Nav/mainNav";

function App() {
  return (
    <Fragment>
      <SubNav></SubNav>
      <MainNav></MainNav>
    </Fragment>
  );
}

export default App;
