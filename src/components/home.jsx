import React, { Component } from "react";
import Cards from "./cards";
import PageHeader from "./pageHeader";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <hr />
        <h4 className="home">המועדפים שלנו</h4>
        <Cards />
      </React.Fragment>
    );
  }
}

export default HomePage;
