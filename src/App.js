import React, { Component, Fragment } from "react";
import { } from "react-bootstrap";
import {} from "bootstrap";
import {Navbar} from 'reactstrap';
import "./App.css";
import Game from "./games/amoba"
import "./games/async-app/App.js"
import "./games/todo-app/App.js"
import Calendar from "react-calendar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // https://getbootstrap.com/docs/4.3/getting-started/introduction/
    return (
      <div className="container-fluid mw-100">
        <div className="row bg-dark mw-100">
          <Navbar className="navbar navbar-expand-md navbar-collapse navbar-light bg-dark mw-100">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#" target="tartalom">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="./games/amoba/index.js"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Amőba
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </Navbar>
        </div>

        <div className="row">
          <div id="baloldal" className="col-2 collapsing" />
          <div id="tartalom" className="col-8 collapsing" />
          <div id="jobboldal" className="col-2 collapsing" />
          </div>
        

        <div className="row">
          <div id="footer" className="col-12 mw-100">
            Footer
          </div>
        </div>
      </div>
    );
  }
}
export default App;
