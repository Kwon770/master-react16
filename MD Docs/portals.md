# Portals

리액트 루트 밖에서 랜더하기위해서 사용

### index.html
```html

<!-- ~~ -->

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- Input element here by portals -->
    <header>
      <h1>Can't touch this</h1>
      <span id="touchme"></span>
    </header>
    <!-- Inaccessible Area (outside of React Root) -->
    <div id="root">
    <!-- React Root -->
    </div>
  </body>
```

### App.js
```js
// Portals 는 react-dom 안에 있으므로 import 해야함
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!";
```
