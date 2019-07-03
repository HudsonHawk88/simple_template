import React, { Component } from "react";
import {} from 'react-bootstrap';
import {} from 'bootstrap';
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render(){
// https://getbootstrap.com/docs/4.3/getting-started/introduction/
return(
<div class="container">
  <div class="row">
      <div class="col-12" id="navbar">Menu</div>
  </div>
  <div class="row">
      <div class="col" id="baloldal">Oldalsáv</div>
      <div class="col-8" id="tartalom">Tartalom</div>
      <div class="col" id="jobboldal">Oldalsáv</div>
  </div>
  <div class="row">
      <div class="col-12" id="footer">Footer</div>
  </div>
</div>

)



  }
}
  export default App;