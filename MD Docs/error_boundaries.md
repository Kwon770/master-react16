# Error Boundaries

에러 발생시 앱이 모두 죽는 것을 방지

### 단, Componet의 내의 오류는 가능하지만 Portals 가 에러를 만들시 Catch 불가

```js
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
    // 참조하는 freinds 가 undefined 이 되면서 에러 발생
    return freinds.map(freinds => ` ${freinds} `);
  }
}

const ErrorFallback = () => "Sorry, something went wrong";

class App extends Component {
  state = {
    hasError: false
  };
  // componentDidCatch : 컴포넌트의 에러를 감지 (error, info)
  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    return (
      {hasError ? <ErrorFallback /> : <ErrorMaker />}
    );
  }
}
```
