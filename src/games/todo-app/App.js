import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
//import {Button} from "bootstrap";
import "./App.css";
import logo from "./images/plus.png";
//import { ImportEqualsDeclaration } from "@babel/types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLeiras: "",
      formHatarido: "",
      formFeladat: "",
      formFontos: "",
      todo: {
        id: undefined,
        feladat: undefined,
        hatarido: undefined,
        leiras: undefined,
        fontos: undefined
      },
      todos: [],
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addTodo = todo => {
    this.setState(
      prevState => ({
        todos: [...prevState.todos, todo]
      }),
      () => {
        this.toggle();
      }
    );
  };

  isIdEq(element) {
    return element.id === this;
  }

  delTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => {
        return todo.id !== id;
      }),
      todo: {
        id: undefined,
        feladat: undefined,
        hatarido: undefined,
        leiras: undefined,
        fontos: undefined
      }
    }));
  };

  uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  renderTodoButtons = () => {
    return this.state.todos.map(item => {
      return (
        <Button
          key={item.id}
          block
          color={item.fontos === "Igen" ? "danger" : "primary"}
          onClick={() => {
            this.setState({
              todo: {
                id: item.id,
                feladat: item.feladat,
                hatarido: item.hatarido,
                leiras: item.leiras,
                fontos: item.fontos
              }
            });
          }}
        >
          {item.feladat}
        </Button>
      );
    });
    
  };
  
  handleInputChange = e => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value
    });
  };

  renderTodoDetails = () => {
    const { todo } = this.state;

    return (
      <Fragment>
        {todo.id && (
          <Fragment>
            <font size="5">
            <br />
            <p><u><b>{"Feladat: "}</b></u></p>
            {todo.feladat} <br /><br />
            <p><u><b>{"Határidő: "}</b></u></p>
            {todo.hatarido} <br /><br />
            <p><u><b>{"Leírás: "}</b></u></p>
            {todo.leiras} <br /><br />
            <p><u><b>{"Fontos-e? : "}</b></u></p>
            {todo.fontos} <br /><br />
            <Button
              size="lg"
              outline
              block
              color="danger"
              onClick={() => {
                this.delTodo(todo.id);
              }}
            >
              Törlés
            </Button><br /><br />
            </font>
          </Fragment>
        )}
      </Fragment>
    );
  };

  render() {
    const { formFeladat, formHatarido, formLeiras, formFontos } = this.state;
    return (
      <Fragment>
        <div name="teendok">
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Feladat létrehozása</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="formFeladat">Feladat rövid leírása:</Label>
                  <Input
                    type="text"
                    name="formFeladat"
                    id="formFeladat"
                    value={formFeladat}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="formHatarido">Feladat határideje:</Label>
                  <Input
                    type="date"
                    name="formHatarido"
                    id="formHatarido"
                    value={formHatarido}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="formLeiras">Feladat rövid leírása:</Label>
                  <Input
                    type="textarea"
                    name="formLeiras"
                    id="formLeiras"
                    value={formLeiras}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="formFontos">Fontos-e?</Label>
                  <Input
                    type="select"
                    name="formFontos"
                    id="formFontos"
                    value={formFontos}
                    onChange={this.handleInputChange}
                  >
                    <option value="Nem">Nem</option>
                    <option value="Igen">Igen</option>
                  </Input>
                </FormGroup>
                <Button
                  color="primary"
                  onClick={() => {
                    this.addTodo({
                      id: this.uuidv4(),
                      feladat: formFeladat,
                      hatarido: formHatarido,
                      leiras: formLeiras,
                      fontos: formFontos
                    });
                  }}
                >
                  Mentés
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Mégse
                </Button>
              </Form>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>

        <div className="container">
          <div className="row">
            <div className="col" name="teendok" id="teendok">
              <h1>Teendők</h1>
              <br />
              <h4>
                {new Date().toLocaleDateString("hu-HU", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </h4>
              <hr />
              <div id="hozzaad" className="col-12" style={{ margin: 0 }} />
              <br />
              <div id="gomblista" className="col-12">
                <Button block outline color="primary" onClick={this.toggle}>
                  <img src={logo} alt="Logo" width="20px" height="20px" />
                  Teendő hozzáadása
                </Button>
                {this.renderTodoButtons()}
              </div>

              <hr />
            </div>
            <div className="col-8">
              <h1>Teendők részletesen</h1>
              <hr />
              <div className="col-14" id="tartalom">
                {this.renderTodoDetails()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
