import React, { Component, Fragment } from "react";
import { Spinner } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], isLoading: true, loadStatus: undefined };
  }

  componentDidMount = () => {
    const url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(response => {
        if(response.status !== 200) throw new Error("Hálozati hiba!");
        return response.json()
      })
      .then(JSON => {
        this.setState({ isLoading: false, loadStatus: false, movies: Array.isArray(JSON) ? JSON : [] })
      }
      )
      .catch(error => {
        this.setState({ isLoading: false, loadStatus: "error" });
      });
  };

  renderList = movies => {
    return (
      <ul>
        {movies.map(item => (
          <li style={{ listStyle: "none" }} key={item.id}>
            <p>
              <b>
                <u>{item.title}</u>
              </b>
            </p>
            <p>
              <i>{item.release_date}</i>
            </p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { isLoading, loadStatus, movies } = this.state;

    return (
      <Fragment>
          {isLoading ? (
            <Loading />
          ) : loadStatus === "error" ? (
            <Error />
          ) : (
            this.renderList(movies)
          )}
      </Fragment>
    );
  }
}

class Loading extends Component {
  render() {
    return (
      <div>
        <Spinner color="primary" />
      </div>
    );
  }
}

class Error extends Component {
  render() {
    return (
      <div>
        <h1>Valami nincs rendben!!!</h1>
      </div>
    );
  }
}
export default App;
