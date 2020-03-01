import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!";

class ReturnTypes extends Component {
  // React16 : component, null, 한개 element 만 반환가능하던 예전과 달리
  // string, 여러 element를 반환 가능
  // <Fragment></Fragment> = <></>
  render() {
    return (
      <Fragment>
        <header></header>
        <div></div>
        <footer></footer>
      </Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Portals />
        App
        <ReturnTypes />
      </>
    );
  }
}

export default App;
