import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    anwser: 42,
  };

  asyncFunct = () => {
    return Promise.resolve(37);
  };
  async componentDidMount() {
    this.setState({
      anwser: await this.asyncFunct(),
    });
  }
  render() {
    return <h2>Hello Class Component -- {this.state.anwser}</h2>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
