import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DynamicTab: null,
    }
  }

   loadDynamicComponent() {
     import('./DynamicTab').then(module => {
       const DynamicTab = module.default;
       this.setState({ DynamicTab });
     });
  }

  getDynamicComponent() {

    let { DynamicTab } = this.state;
    if (DynamicTab) {
      return <DynamicTab />
    } else{
      return <p> Component not loaded </p>;
    }
  }

  render() {
    return (
      <div className="App">
        <p>Dynamic import component example</p>
        <button onClick={() => this.loadDynamicComponent()} > Load Comp</button>
        {this.getDynamicComponent()}
      </div>
    );
  }
}

export default App;
