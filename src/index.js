import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container>
      {/* <Typography
        // component="div"
        // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      /> */}
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
