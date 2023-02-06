import './App.css';
import React from 'react';
import { Link } from "react-router-dom";


class App extends React.Component {

  render () {
    return (
      <div className="padding">

        <h3> Hello Prashanth </h3>

        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/todo">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>

      </div>
    )
  }
}

export default App;
