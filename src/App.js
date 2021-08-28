import logo from "./logo.svg"
import "./App.css"
import State from "./components/State"
import UseRef from "./components/UseRef"
import UseEffect from "./components/UseEffect"
import EventsForms from "./components/EventsForms"
import FormikComponent from "./components/Formik"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { Box, Grid, Typography } from "@material-ui/core"

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function App() {
  return (
    <div className="App">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    <Button variant="contained" color="primary">
                      Home
                    </Button>
                  </Link>
                  {/* <Box color="text.primary" clone>
                  Helloo
                </Box> */}
                </li>
                <li>
                  <Link to="/state">
                    <Button variant="contained" color="primary">
                      State
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/userefs">
                    <Button variant="contained" color="primary">
                      useRefs
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/useeffects">
                    <Button variant="contained" color="primary">
                      UseEffects
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/events">
                    <Button variant="contained" color="primary">
                      Events
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/formik">
                    <Button variant="contained" color="primary">
                      Fomik
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/state">
                <h4>useState</h4>
                <State />
                <hr />
                <br />
              </Route>
              <Route path="/userefs">
                <h4>useRef</h4>
                <UseRef />
                <hr />
                <br />
              </Route>
              <Route path="/useeffects">
                <h4>useEffect</h4>
                <UseEffect />
                <hr />
                <br />
              </Route>
              <Route path="/events">
                <h4>Evets & Forms</h4>
                <EventsForms />
                <hr />
                <br />
              </Route>
              <Route path="/formik">
                <h4>Formik</h4>
                <FormikComponent />
                <hr />
                <br />
              </Route>
            </Switch>
          </div>
        </Router>
      </Grid>

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
      {/* <h4>UseMemo</h4>
      <UseMemo />
      <hr />
      <br /> */}
    </div>
  )
}

export default App
