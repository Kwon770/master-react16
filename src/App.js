import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class ErrorMaker extends Component {
  state = {
    freinds: ["a1", "a2", "a3"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        freinds: undefined
      });
    }, 2000);
  };
  render() {
    const { freinds } = this.state;
    return freinds.map(freinds => ` ${freinds} `);
  }
}

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

const ErrorFallback = () => "Sorry, something went wrong";

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    return (
      <>
        <Portals />
        App
        <ReturnTypes />
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </>
    );
  }
}

export default App;
