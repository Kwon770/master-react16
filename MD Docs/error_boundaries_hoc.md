# Error Boundaries with HOC

에러 발생시 앱이 모두 죽는 것을 방지

일반적인 Error Boundaries 와 달리 범용성있게 사용하기 위한 HOC

### 단, Componet의 내의 오류는 가능하지만 Portals 가 에러를 만들시 Catch 불가

```js
const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

const ErrorFallback = () => "Sorry, something went wrong";

class ErrorMaker extends Component { 
    // ~~
    }

const PErrorMaker = BoundaryHOC(ErrorMaker);

class App extends Component {
  render() {
    return (
      <>
        <PErrorMaker />
      </>
    );
  }
}
```
