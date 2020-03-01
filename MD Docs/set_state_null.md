# Controll Component Update by setState Null 

Component 의 업데이트 여부를 setState(null) 을 통해 조절

```js
const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZAS) {
    return {
      pizzas: pizzas + 1
    };
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    pizzas: 0
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I ate ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }
  _handleClick = () => {
      // pizzas 가 MAX_PIZZAS 에 도달해 null 을 반환받을 경우 Components 와 state 를 업데이트 하지 않음
    this.setState(eatPizza);
  };
}
```
