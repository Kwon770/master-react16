import React, { Component, Fragment } from "react";

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

function App() {
  return (
    <>
      <ReturnTypes />
    </>
  );
}

export default App;
