import logo from "./logo.svg"
import "./App.css"
import State from "./components/State"
import UseRef from "./components/UseRef"
import UseEffect from "./components/UseEffect"
import EventsForms from "./components/EventsForms"
import FormikComponent from "./components/Formik"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h4>useState</h4>
      <State />
      <hr />
      <br />
      <h4>useRef</h4>
      <UseRef />
      <hr />
      <br />
      <h4>useEffect</h4>
      <UseEffect />
      <hr />
      <br />
      <h4>Evets & Forms</h4>
      <EventsForms />
      <hr />
      <br />
      <h4>Formik</h4>
      <FormikComponent />
      <hr />
      <br />
      {/* <h4>UseMemo</h4>
      <UseMemo />
      <hr />
      <br /> */}
    </div>
  )
}

export default App
