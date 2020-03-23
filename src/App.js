import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// State hanya bisa dibuat di komponen class bukan dikomponen fungsi
// State
class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleString() //props.start
    }
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time: new Date().toLocaleString() //parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div>{this.state.time}</div>
    );
  }
}

function Age(props) {
  return <span>dengan umur {props.age} tahun</span>
}

function Greating(props) {
  return <h4>Hallo, saya {props.name} <Age age={props.age} /></h4>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start="0" />
        <Greating name="Galih Ariwanda" age="23" />
        <Greating name="Mumu kecil" age="23" />
      </header>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hai, <code>src/App.js</code> <h1>ini adalah Galih project</h1>
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
