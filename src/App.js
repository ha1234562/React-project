import React, { Component } from 'react';
import './App.css';
//import Greet from './components/Greet'
//import Welcome from './components/Welcome'
//import Hello from './components/Hello'
import Message from './components/Message'
//import Prop from './components/Prop'
class App extends Component {
  render () {
    return (
    <div className="App">
      <Message />
      {/* <Prop name="Bruce" heroName="Batman">
        <p>This is Children props</p>
      </Prop>
      <Prop name="Clark" heroName="Superman">
        <button>Action</button>
      </Prop>
      <Prop name="Diana" heroName="Wonder Woman">

      </Prop>*/}
      {/*<Welcome name="Bruce" heroName="Batman"/>*/}
      {/*<Welcome name="Clark" heroName="Superman"/>*/}
      {/*<Welcome name="Diana" heroName="Wonder Woman"/>*/}
      
      {/*<Greet /> */}
      {/* <Welcome /> */}
      {/*<Hello /> */}
    </div>
    );
  }
}

export default App;
