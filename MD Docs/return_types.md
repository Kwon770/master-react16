# Return Types

Component, null, 한개의 element 만 반환가능하던 이전과 달리, string 과 여러 elements를 반환 가능

Fragment에서 더 간단하게 표현도 가능

__&#60;Fragment&#62;&#60;/&#62; === &#60;&#62;&#60;/&#62;__

```js
import React, { Component, Fragment } from "react";

class ReturnTypes extends Component {
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
```
