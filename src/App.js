import logo from './logo.svg';
import './App.css';

import { observable, autorun } from 'mobx'
var observableNumber = observable.box(10)
var observableString = observable.box('qy')

autorun(() => {
  console.log('observableNumber>>', observableNumber.get())
})

autorun(() => {
  console.log('observableString>>', observableString.get())
})

setTimeout(() => {
  observableNumber.set(20)
}, 1000)
setTimeout(() => {
  observableString.set('name-q')
}, 2000)

// var observableObj = observable.map({
//   name: 'qy',
//   age: 27
// })

// autorun(() => {
//   console.log('observableObj>>', observableObj.get('name'))
// })
// setTimeout(() => {
//   observableObj.set('name', 'name-q')
// }, 3000)

var observableObj = observable({
  name: 'qy',
  age: 27
})

autorun(() => {
  console.log('observableObj>>', observableObj.name)
})
setTimeout(() => {
  observableObj.name = 'name-q'
}, 3000)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
